<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyResponse extends Model
{
    use HasFactory;
    
    protected $fillable = ['response'];

    public static function generate()
    {
        self::insert(['response' => 'fake']);
    }
}
