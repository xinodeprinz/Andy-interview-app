<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth');
    }

    public function index()
    {
        $user = Auth::user();
        $admin = Admin::find(1);
        return Inertia::render('Dashboard', compact('user', 'admin'));
    }

    public function secretCode(Request $request)
    {
        $request->validate(['code' => 'required']);
        $admin_code = Admin::find(1)->code;
        if ($admin_code == $request->code) {
            $request->session()->put('show_quiz', true);
            return back();
        } else {
            return back()->withErrors(['wrong_code', 'Invalid code']);
        }
    }

    public function quiz(Request $request)
    {
        $data = Question::all();
        foreach ($data as $d) {
            $d->option_1 = json_decode($d->option_1);
            $d->option_2 = json_decode($d->option_2);
            $d->option_3 = json_decode($d->option_3);
            $d->option_4 = json_decode($d->option_4);
            $d->options = [$d->option_1, $d->option_2, $d->option_3, $d->option_4];
            unset($d->option_1);
            unset($d->option_2);
            unset($d->option_3);
            unset($d->option_4);
        }
        $user = Auth::user();

        $exists = $user->score()->exists();
        $score_ini = $user->score()->first()->score ?? 0;
        $admin = Admin::find(1);

        if ($request->session()->has('show_quiz')) {
            $show_quiz = $request->session()->get('show_quiz');
        } else {
            $show_quiz = false;
        }

        return Inertia::render('Quiz', compact(
            'user',
            'data',
            'exists',
            'score_ini',
            'admin',
            'show_quiz'
        ));
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return back();
    }

    public function storeQuestions()
    {
        return Question::insert([
            [
                'question' => 'How many type of metamorphosis exits?',
                'option_1' => json_encode(['A', '2']),
                'option_2' => json_encode(['B', '3']),
                'option_3' => json_encode(['C', '1']),
                'option_4' => json_encode(['D', '4']),
                'answer' => 'A'
            ],
            [
                'question' => 'The sum of 3 and 5 is',
                'option_1' => json_encode(['A', '7']),
                'option_2' => json_encode(['B', '5/3']),
                'option_3' => json_encode(['C', '3/5']),
                'option_4' => json_encode(['D', '8']),
                'answer' => 'D'
            ],
            [
                'question' => 'A number that when multiplied by 8 gives 24 is',
                'option_1' => json_encode(['A', '4']),
                'option_2' => json_encode(['B', '6']),
                'option_3' => json_encode(['C', '3']),
                'option_4' => json_encode(['D', '5']),
                'answer' => 'C'
            ],
            [
                'question' => 'Who is the president of Cameroon?',
                'option_1' => json_encode(['A', 'Amadou Ahidjo']),
                'option_2' => json_encode(['B', 'H.E. Paul Biya']),
                'option_3' => json_encode(['C', 'Good Luck Johnathan']),
                'option_4' => json_encode(['D', 'Lucas Nuatata']),
                'answer' => 'B'
            ],
            [
                'question' => 'At what age did Queen Elizabeth of Englind die?',
                'option_1' => json_encode(['A', '89']),
                'option_2' => json_encode(['B', '50']),
                'option_3' => json_encode(['C', '93']),
                'option_4' => json_encode(['D', '99']),
                'answer' => 'D'
            ],
            [
                'question' => 'Who was the fist president of USA?',
                'option_1' => json_encode(['A', 'George Washington']),
                'option_2' => json_encode(['B', 'Joe Biden']),
                'option_3' => json_encode(['C', 'Donald Trump']),
                'option_4' => json_encode(['D', 'Barack Obama']),
                'answer' => 'A'
            ],
            [
                'question' => 'Who was the first president of Cameroon?',
                'option_1' => json_encode(['A', 'H.E. Paul Biya']),
                'option_2' => json_encode(['B', 'Amadou Ahidjo']),
                'option_3' => json_encode(['C', 'Donald Trump']),
                'option_4' => json_encode(['D', 'Barack Obama']),
                'answer' => 'B'
            ],
            [
                'question' => 'What is the name of the greatest scientist who ever lived?',
                'option_1' => json_encode(['A', 'Max Planck']),
                'option_2' => json_encode(['B', 'Michael Faraday']),
                'option_3' => json_encode(['C', 'Albert Einten']),
                'option_4' => json_encode(['D', 'Isaac Newtoon']),
                'answer' => 'C'
            ],
            [
                'question' => 'Who is the father of electricity?',
                'option_1' => json_encode(['A', 'Max Planck']),
                'option_2' => json_encode(['B', 'Michael Faraday']),
                'option_3' => json_encode(['C', 'Albert Einten']),
                'option_4' => json_encode(['D', 'Isaac Newtoon']),
                'answer' => 'B'
            ],
            [
                'question' => 'What is the remainder when 4 is divided by 7?',
                'option_1' => json_encode(['A', '4']),
                'option_2' => json_encode(['B', '0']),
                'option_3' => json_encode(['C', '7']),
                'option_4' => json_encode(['D', '3']),
                'answer' => 'B'
            ],
        ]);
    }

    public function storeMark(Request $request)
    {
        $data = $request->validate(['score' => 'required|integer']);
        Quiz::create([
            'user_id' => auth()->user()->id,
            'score' => $data['score']
        ]);

        return back();
    }
}