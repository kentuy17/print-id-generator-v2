<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Tourist;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\JsonResponse;
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
            'data' => Tourist::orderBy('updated_at', 'desc')
                ->orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->get()
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
            'id_no' => rand(100000, 999999),
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'phone_number' => $request->phone,
            'address' => $request->address,
            'city' => $request->cityState,
            'nationality' => $request->nationality,
            'country' => $request->country,
            'zip_code' => $request->zip ?? $request->zipCode, // random_int(1000, 9999),
            'gender' => substr(ucfirst($request->gender), 0, 1),
            'passport_number' => $request->passportNumber ?? 'N/A',
            'arrival_date' => $request->arrivalDate, // $request->arrivalDate,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->intended(route('tourist', absolute: false));
    }

    public function edit($id): Response
    {
        return Inertia::render('Tourist/Edit', [
            'tourist' => Tourist::find($id),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $tourist = Tourist::find($request->id);
        $tourist->id_no = !$tourist->id_no ? rand(100000, 999999) : $tourist->id_no;
        $tourist->first_name = $request->firstName;
        $tourist->last_name = $request->lastName;
        $tourist->email = $request->email;
        $tourist->phone_number = $request->phone;
        $tourist->address = $request->address;
        $tourist->city = $request->cityState;
        $tourist->nationality = $request->nationality;
        $tourist->country = $request->country;
        $tourist->zip_code = $request->zip ?? $request->zipCode;
        $tourist->gender = substr(ucfirst($request->gender), 0, 1);
        $tourist->passport_number = $request->passportNumber ?? 'N/A';
        $tourist->arrival_date = $request->arrivalDate;
        $tourist->save();
        return Redirect::route('tourist');
    }

    public function getItemById($id): JsonResponse
    {
        return response()->json(Tourist::find($id));
    }

    public function delete($id): RedirectResponse
    {
        $tourist = Tourist::find($id);
        $tourist->delete();
        return Redirect::route('tourist');
    }
}
