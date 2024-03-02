<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\appController;
use App\Http\Controllers\priceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/newapp', [appController::class, 'app']);
Route::get('/calender', [appController::class, 'calender']);
Route::get('/pricing', [priceController::class, 'pricing']);

Route::get('/pricingSideNav', [priceController::class, 'pricingSideNav']);
Route::get('/ForgetPassword', [priceController::class, 'forgetPassword']);



