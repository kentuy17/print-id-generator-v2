<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PrintedId extends Model
{
    //
    protected $fillable = [
        'tourist_id',
        'id_number',
        'template_id',
        'picture',
        'qr_code',
        'status', // 0 = not printed, 1 = printed
        'printed_by', // user_id
        'created_at',
        'updated_at',
    ];
}
