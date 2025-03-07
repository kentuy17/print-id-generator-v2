<?php

namespace App\Http\Controllers;

use App\Models\Tourist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    //
    public function index(): Response
    {
        // return Inertia::render('Tourist/List', [
        //     'data' => Tourist::orderBy('updated_at', 'desc')
        //         ->orderBy('created_at', 'desc')
        //         ->orderBy('id', 'desc')
        //         ->get()
        // ]);


        // $reports = Tourist::where('arrival_date', '>=', now()->subDays(7))->get();
        $reports = Tourist::select('arrival_date', DB::raw('COUNT(*) as total'))
            ->groupBy('arrival_date')
            ->orderBy('arrival_date', 'desc')
            ->get();

        return Inertia::render('Report', [
            'reports' => $reports
        ]);
    }
}
