<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TemplatesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('templates')->delete();
        
        \DB::table('templates')->insert(array (
            0 => 
            array (
                'id' => 1,
                'filename' => 'Template_1.png',
                'name' => 'Salagdoong Beach',
                'location' => 'San Juan',
                'orientation' => 'landscape',
                'height' => 720,
                'width' => 960,
                'description' => 'This is a description of the template',
                'is_active' => 0,
                'enabled' => 0,
                'created_at' => '2025-03-04 22:53:42',
                'updated_at' => '2025-03-04 22:53:42',
            ),
            1 => 
            array (
                'id' => 2,
                'filename' => 'Template_2.png',
                'name' => 'Salagdoong Beach',
                'location' => 'San Juan',
                'orientation' => 'landscape',
                'height' => 720,
                'width' => 960,
                'description' => 'This is a description of the template',
                'is_active' => 0,
                'enabled' => 0,
                'created_at' => '2025-03-04 22:53:42',
                'updated_at' => '2025-03-04 22:53:42',
            ),
            2 => 
            array (
                'id' => 3,
                'filename' => 'Template_3.png',
                'name' => 'Salagdoong Beach',
                'location' => 'San Juan',
                'orientation' => 'landscape',
                'height' => 720,
                'width' => 960,
                'description' => 'This is a description of the template',
                'is_active' => 0,
                'enabled' => 0,
                'created_at' => '2025-03-04 22:53:42',
                'updated_at' => '2025-03-04 22:53:42',
            ),
            3 => 
            array (
                'id' => 4,
                'filename' => '6979963.jpg',
                'name' => 'Travel tour guide',
                'location' => 'N/A',
                'orientation' => 'portrait',
                'height' => 640,
                'width' => 480,
                'description' => 'This template is for travel tour guide',
                'is_active' => 0,
                'enabled' => 1,
                'created_at' => '2025-03-04 22:53:42',
                'updated_at' => '2025-03-04 22:53:42',
            ),
            4 => 
            array (
                'id' => 5,
                'filename' => 'clean_template_1.png',
                'name' => 'Salagdoong Beach',
                'location' => 'San Juan',
                'orientation' => 'landscape',
                'height' => 720,
                'width' => 960,
                'description' => 'This template is for travel tour guide',
                'is_active' => 1,
                'enabled' => 1,
                'created_at' => '2025-03-04 22:53:42',
                'updated_at' => '2025-03-04 22:53:42',
            ),
        ));
        
        
    }
}
