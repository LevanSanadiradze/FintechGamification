<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DietController extends Controller
{
    public function getMyDietData()
    {
        $MyDietData = Diet_GetListOfMonths()[0];
        return $MyDietData;
    }

    public function getHistory()
    {
        $History = Diet_GetListOfMonths();
        return $History;
    }
}
