<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NdeTekController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function test()
    {
        $data = [
            [
                'name' => 'Minister',
                'id' => 3434,
            ],
            [
                'name' => 'Nde',
                'id' => 3434,
            ]
        ];

        return Inertia::render('profs/Index', compact('data'));
    }

    public function form(Request $request)
    {
        $request->validate([
            'username' => 'required|integer',
            'password' => 'required|string'
        ]);

        $data = [
            'name' => 'xino de prinz',
            'email' => 'xinonde@gmail.com'
        ];
        // return redirect()->back()->with(['data' => $data]);
        return redirect('/');
    }
}
