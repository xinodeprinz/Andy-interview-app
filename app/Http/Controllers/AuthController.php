<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function student(Request $request)
    {
        if ($request->isMethod('GET')) {
            return Inertia::render('Student');
        } else {
            $birth_path = $request->file('birth_certificate')->store('birth_certificates');
            $slip_path = $request->file('slip')->store('slips');
            $photo_path = $request->file('photo')->store('profiles', 'public');
            session([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'username' => $request->username,
                'date_of_birth' => $request->date_of_birth,
                'gender' => $request->gender,
                'primary_school' => $request->primary_school,
                'grade' => $request->grade,
                'school' => $request->school,
                'online_interview' => $request->online_interview,
                'birth_path' => $birth_path,
                'slip_path' => $slip_path,
                'password' => $request->password,
                'photo_path' => $photo_path
            ]);
            return;
        }
    }

    public function guardian(Request $request)
    {
        if (!Session::has('first_name')) {
            return redirect('/register/student');
        }

        if ($request->isMethod('GET')) {
            return Inertia::render('Guardian');
        } else {
            User::create([
                'name' => session('first_name') . ' ' . session('last_name'),
                'username' => session('username'),
                'date_of_birth' => session('date_of_birth'),
                'gender' => session('gender'),
                'primary_school' => session('primary_school'),
                'grade' => session('grade'),
                'school' => session('school'),
                'online_interview' => session('online_interview'),
                'password' => Hash::make(session('password')),
                'guardian_name' => $request->g_first_name . ' ' . $request->g_last_name,
                'guardian_gender' => $request->g_gender,
                'guardian_date_of_birth' => $request->g_date_of_birth,
                'guardian_relationship' => $request->g_relationship,
                'guardian_email' => $request->g_email,
                'guardian_phone_number' => $request->g_phone_number,
                'guardian_occupation' => $request->g_occupation,
                'guardian_address' => $request->g_address,
                'correct_code' => false,
                'birth_certificate' => session('birth_path'),
                'has_paid_fees' => false,
                'slip' => session('slip_path'),
                'photo' => session('photo_path'),
            ]);

            $credentials = [
                'username' => session('username'),
                'password' => session('password'),
            ];

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
            }
            return;
        }
    }

    public function login(Request $request)
    {
        if ($request->isMethod('GET')) {
            return Inertia::render('Login');
        } else {
            $credentials = [
                'username' => $request->username,
                'password' => $request->password,
            ];
            $remember = $request->checked;
            if (Auth::attempt($credentials, $remember)) {
                $request->session()->regenerate();

                return;
            }

            return response('', 401);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}