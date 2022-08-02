<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Malico\MeSomb\Deposit;
use Malico\MeSomb\Payment;

class MomoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $user = Auth::user();
        $admin = Admin::find(1);
        return Inertia::render('Payment', compact('user', 'admin'));
    }

    public function process(Request $request)
    {
        $request->validate([
            'phone_number' => 'required|string|size:9',
            'amount' => 'required|integer' //set min:100
        ]);

        $user = Auth::user();

        $status = $this->deposit($request->phone_number, $request->amount);
        if ($status === 'failed') {
            return back()->withErrors([
                'failed' => 'Transaction failed'
            ]);
        }

        Transaction::create([
            'phone_number' => $request->phone_number,
            'amount' => $request->amount,
            'user_id' => $user->id
        ]);

        $user->has_paid_fees = true;
        $user->update();

        return back();
    }

    protected function deposit($phone_number, $amount)
    {
        $request = new Payment("+237$phone_number", $amount);

        try {
            $payment = $request->pay();
        } catch (\Throwable $th) {
            return 'failed';
        }

        if ($payment->success) {
            return 'success';
        } else {
            return 'failed';
        }
    }

    protected function withdraw($phone_number, $amount)
    {
        $trans = new Deposit("+237$phone_number", $amount);
        try {
            $payment = $trans->pay();
        } catch (\Throwable $th) {
            return 'failed';
        }

        if ($payment->success) {
            return 'success';
        } else {
            return 'failed';
        }
    }
}