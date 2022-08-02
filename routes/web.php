<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MomoController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'App\Http\Controllers\NdeTekController@home');
Route::post('form', 'App\Http\Controllers\NdeTekController@form');

Route::get('/index/{text?}', fn ($text = null) => Inertia::render('profs/Index', compact('text')));

Route::match(['GET', 'POST'], '/register/student', [AuthController::class, 'student']);
Route::match(['GET', 'POST'], '/register/guardian', [AuthController::class, 'guardian']);
Route::match(['GET', 'POST'], '/login', [AuthController::class, 'login'])->name('login');

Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/logout', [AuthController::class, 'logout']);

Route::get('/store-questions', [DashboardController::class, 'storeQuestions']);
Route::get('/logout', [DashboardController::class, 'logout']);
Route::post('/secret-code', [DashboardController::class, 'secretCode']);
Route::get('/dashboard/interview-quiz', [DashboardController::class, 'quiz']);
Route::post('/score/store', [DashboardController::class, 'storeMark']);
Route::get('/payment', [MomoController::class, 'index']);
Route::post('/payment', [MomoController::class, 'process']);

// Admin
Route::get('/admin', [AdminController::class, 'index']);
Route::get('/student/profile/{id}', [AdminController::class, 'studentProfile'])->name('student-profile');
Route::delete('/admin/{id}', [AdminController::class, 'deleteUser'])->name('delete-user');