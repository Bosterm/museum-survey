<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SurveyResponse;

class SurveyResponseController extends Controller
{
    public function index(Request $request)
    {
        return SurveyResponse::all();
    }

    public function store(Request $request)
    {
        $validResponses = ['blue' ,'black'];

        $request->validate(['response' => [Rule::in($validResponses), 'required']]);

        return SurveyResponse::create(['response' => $request->input('response')]);
    }
}
