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
            'data' => Tourist::orderBy('id', 'desc')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Tourist/Add');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'firstName' => 'required',
            'email' => 'required',
        ]);

        Tourist::create([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'phone_number' => $request->phone,
            'address' => $request->address,
            'city' => $request->cityState,
            'nationality' => $request->nationality,
            'country' => $request->country,
            'zip_code' => random_int(1000, 9999),
            'gender' => substr(ucfirst($request->gender), 0, 1),
            'date_of_birth' => $request->arrivalDate,

        ]);

        return redirect()->intended(route('tourist', absolute: false));
    }

    public function edit($id): Response
    {
        return Inertia::render('Tourist/Edit', [
            'tourist' => Tourist::find($id),
        ]);
    }

    public function patch(Request $request): RedirectResponse
    {
        $tourist = Tourist::find($request->id);
        $tourist->save();
        return Redirect::route('tourist.edit', $tourist->id);
    }
}
