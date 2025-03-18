<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    //
    public function index(): Response
    {
        return inertia('Event/Index', [
            'events' => Event::where('is_active', true)
                ->with('user')
                ->orderBy('updated_at', 'desc')
                ->orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Event/Add');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        Event::create([
            'name' => $request->eventName,
            'description' => $request->details,
            'location' => $request->location,
            'date' => Carbon::parse($request->date)->format('Y-m-d'),
            'time' => $request->time ?? '00:00:00',
            'image' => $imageName ?? null,
            'is_active' => true,
            'added_by' => auth()->user()->id,
            'contact_number' => $request->contact_number ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->intended(route('events', absolute: false));
    }

    public function delete($id): RedirectResponse
    {
        $event = Event::find($id);
        $event->delete();
        return Redirect::route('events');
    }

    public function edit($id): Response
    {
        return Inertia::render('Event/Edit', [
            'event' => Event::find($id),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        $event = Event::find($request->id);
        $event->name = $request->eventName;
        $event->description = $request->details;
        $event->location = $request->location;
        $event->date = $request->eventDate;
        $event->time = $request->time ?? '00:00:00';
        $event->contact_number = $request->contact_number ?? null;
        $event->image = $imageName ?? null;
        $event->save();

        return Redirect::route('events');
    }
}
