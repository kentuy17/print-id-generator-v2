<?php

namespace App\Http\Controllers;

use App\Exports\TouristsExport;
use App\Models\Tourist;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ReportController extends Controller
{
    //
    public function index(): Response
    {
        $reports = Tourist::select('arrival_date', DB::raw('COUNT(*) as total'))
            ->groupBy('arrival_date')
            ->orderBy('arrival_date', 'desc')
            ->get();

        $reports->transform(function ($report) {
            $report->filter_date = $report->arrival_date;
            return $report;
        });

        return Inertia::render('Report', [
            'reports' => $reports
        ]);
    }

    /**
     * @param int $year
     * @param int $week
     * Usage:
     * echo $this->getFormattedWeek(2025, 8); // Outputs: February 23 - March 1, 2025
     * echo $this->getFormattedWeek(2025, 9); // Outputs: March 2 - March 8, 2025
     */
    private function getFormattedWeek($year, $week)
    {
        $startDate = Carbon::now()->setISODate($year, $week)->startOfWeek();
        $endDate = $startDate->copy()->endOfWeek();

        return $startDate->format('F j') . ' - ' . $endDate->format('F j, Y');
    }

    public function search(Request $request): JsonResponse
    {
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $group_by = $request->filter_by;
        $start_of_year = date('Y-01-01');
        $end_of_year = date('Y-12-31');

        if ($group_by == 'day') {
            $reports = Tourist::select('arrival_date as filter_date', DB::raw('COUNT(*) as total'))
                ->whereBetween('arrival_date', [$start_date, $end_date])
                ->groupBy('filter_date')
                ->orderBy('filter_date', 'desc')
                ->get();
        }

        if ($group_by == 'week') {
            $reports = Tourist::select(
                DB::raw('WEEK(arrival_date) as week'),
                DB::raw('YEAR(arrival_date) as year'),
                DB::raw('COUNT(*) as total')
            )
                ->whereBetween('arrival_date', [$start_of_year, $end_of_year])
                ->groupBy('week', 'year')
                ->orderBy('week', 'desc')
                ->get();

            $reports->transform(function ($report) {
                $report->filter_date = $this->getFormattedWeek($report->year, $report->week);
                return $report;
            });
        }

        if ($group_by == 'month') {
            $reports = Tourist::select(DB::raw('MONTH(arrival_date) as filter_date, COUNT(*) as total'))
                ->whereBetween('arrival_date', [$start_of_year, $end_of_year])
                ->groupBy('filter_date')
                ->orderBy('filter_date', 'desc')
                ->get();

            $reports->transform(function ($report) {
                $month = Carbon::now()->month($report->filter_date)->format('F');
                $year = Carbon::now()->year;
                $report->filter_date = $month . ' ' . $year;
                return $report;
            });
        }

        if ($group_by == 'year') {
            $reports = Tourist::select(DB::raw('YEAR(arrival_date) as filter_date, COUNT(*) as total'))
                ->whereBetween('arrival_date', [$start_of_year, $end_of_year])
                ->groupBy('filter_date')
                ->orderBy('filter_date', 'desc')
                ->get();
        }

        return response()->json($reports);
    }

    public function export(Request $request)
    {
        return Excel::download(new TouristsExport($request), 'tourist.xlsx');
    }
}
