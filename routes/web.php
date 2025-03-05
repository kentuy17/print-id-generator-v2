<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\TouristController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/playground', function () {
        return Inertia::render('Playground');
    })->name('id-template');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/tourists', [TouristController::class, 'index'])->name('tourist');
    Route::get('/tourist/create', [TouristController::class, 'create'])->name('tourist.create');
    Route::post('/tourist/store', [TouristController::class, 'store'])->name('tourist.store');
    Route::get('/tourist/edit/{id}', [TouristController::class, 'edit'])->name('tourist.edit'); // display form
    Route::get('/tourist/show/{id}', [TouristController::class, 'getItemById'])->name('tourist.show'); // display data
    Route::patch('/tourist/update/{id}', [TouristController::class, 'update'])->name('tourist.update');
    Route::delete('/tourist/delete/{id}', [TouristController::class, 'delete'])->name('tourist.delete');

    Route::get('/id-templates', [TemplateController::class, 'index'])->name('id-templates');
    Route::get('/id-template/active', [TemplateController::class, 'getActiveTemplate'])->name('id-template.active');
});

require __DIR__ . '/auth.php';
