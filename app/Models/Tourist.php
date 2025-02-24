<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tourist extends Model
{
    //
    protected $fillable = [
        'first_name',
        'last_name',
        'nationality',
        'passport_number',
        'phone_number',
        'email',
        'gender',
        'date_of_birth',
        'address',
        'city',
        'country',
        'zip_code',
        'created_at',
        'updated_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}
