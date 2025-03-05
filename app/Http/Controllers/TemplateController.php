<?php

namespace App\Http\Controllers;

use App\Models\Template;

use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class TemplateController extends Controller
{
    //
    public function index(): Response
    {
        return Inertia::render('Template', [
            'data' => Template::where('enabled', true)
                ->orderBy('updated_at', 'desc')
                ->orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->get()
        ]);
    }

    public function getActiveTemplate(): JsonResponse
    {
        return response()->json(Template::where('is_active', true)->first());
    }
}
