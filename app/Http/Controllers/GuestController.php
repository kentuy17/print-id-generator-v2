<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class GuestController extends Controller
{
    public function landing(): Response
    {
        $events = Event::where('is_active', true)
            ->orderBy('date', 'asc')
            ->limit(3)
            ->get();

        // $events = Event::all();

        return Inertia::render('Landing', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'events' => $events
        ]);
    }
}
