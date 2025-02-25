<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('printed_ids', function (Blueprint $table) {
            $table->id();
            $table->integer('tourist_id');
            $table->string('id_number');
            $table->integer('templated_id');
            $table->string('picture')->nullable();
            $table->string('qr_code')->nullable();
            $table->boolean('status')->default('0'); // 0 = not printed, 1 = printed
            $table->integer('printed_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('printed_ids');
    }
};
