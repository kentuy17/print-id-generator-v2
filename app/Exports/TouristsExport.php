<?php

namespace App\Exports;

use App\Models\Tourist;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TouristsExport implements FromCollection, WithHeadings
{
    public function __construct($requests)
    {
        $this->requests = $requests;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $cols = ['id_no', 'first_name', 'last_name', 'arrival_date', 'nationality'];
        $requests = $this->requests;

        if (isset($requests['start_date']) && !empty($requests['start_date'])) {
            return Tourist::whereBetween('arrival_date', [$requests['start_date'], $requests['end_date']])
                ->select($cols)
                ->get();
        }

        return Tourist::select($cols)
            ->get();
    }

    public function headings(): array
    {
        return ["ID", "First Name", "Last Name", "Arrival Date", "Nationality"];
    }
}
