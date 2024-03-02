<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class priceController extends Controller
{
    public function pricing()
    {
        return view('pricing');
    }

    public function pricingSideNav()
    {
        return view('pricewithsideNav');
    }


}
