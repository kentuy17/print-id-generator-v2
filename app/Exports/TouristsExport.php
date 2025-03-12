<?php

namespace App\Exports;

use App\Models\Tourist;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TouristsExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Tourist::select('id_no', 'first_name', 'last_name', 'arrival_date', 'nationality')
            ->get();
    }

    public function headings(): array
    {
        return ["ID", "First Name", "Last Name", "Arrival Date", "Nationality"];
    }
}
