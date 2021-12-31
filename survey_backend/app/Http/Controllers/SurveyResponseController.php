<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SurveyResponse;
use Illuminate\Validation\Rule;

class SurveyResponseController extends Controller
{
    public function index(Request $request)
    {
        return SurveyResponse::all();
    }

    public function store(Request $request)
    {
        $validResponses = ['blue-black' ,'white-gold', 'blue-brown', 'other'];

        $request->validate(['response' => [Rule::in($validResponses), 'required']]);

        return SurveyResponse::create(['response' => $request->input('response')]);
    }

    public function count(Request $request)
    {
        return SurveyResponse::selectRaw('response, count(*) as count')
        ->groupByRaw('response')
        ->get();
    }
}
