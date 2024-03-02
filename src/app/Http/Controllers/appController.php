<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class appController extends Controller
{
        /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function app()
    {
        return view('index');
    }

    public function calender()
    {
        return view('calender');
    }



}
