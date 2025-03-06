<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    //
    protected $fillable = [
        'filename',
        'name',
        'location',
        'orientation',
        'height',
        'width',
        'description',
        'is_active',
        'created_at',
        'updated_at',
    ];
}
