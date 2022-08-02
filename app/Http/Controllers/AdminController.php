<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();
        foreach ($users as $user) {
            if (Quiz::where('user_id', $user->id)->exists()) {
                $user->score = Quiz::where('user_id', $user->id)->first()->score;
            } else {
                $user->score = 'N/A';
            }
        }
        return view('admin', compact('users'));
    }

    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();
        return back();
    }

    public function studentProfile($id)
    {
        $user = User::find($id)->toArray();
        $attributes = ['id', 'photo', 'created_at', 'updated_at', 'has_paid_fees'];
        foreach ($attributes as $e) {
            unset($user[$e]);
        }
        return view('profile', compact('user'));
    }
}