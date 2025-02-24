<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Tourist;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TouristController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Tourist/List', [
            'data' => Tourist::get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Tourist/Add');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
        ]);

        return redirect()->intended(route('tourist.index', absolute: false));
    }
}
