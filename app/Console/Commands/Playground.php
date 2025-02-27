<?php

namespace App\Console\Commands;

use App\Models\Tourist;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Playground extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:playground';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $tourists = Tourist::all();
        foreach ($tourists as $key => $value) {
            # code...
            if (!$value->id_no) {
                $value->update([
                    'id_no' => rand(100000, 999999)
                ]);
            }
            Log::info($value);
        }
    }
}
