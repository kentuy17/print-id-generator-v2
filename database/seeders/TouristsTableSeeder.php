<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TouristsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tourists')->delete();
        
        \DB::table('tourists')->insert(array (
            0 => 
            array (
                'id' => 2,
                'id_no' => '550718',
                'first_name' => 'Vladimir',
                'last_name' => 'Pisot',
                'arrival_date' => '2025-03-07',
                'nationality' => 'Russian',
                'passport_number' => '666676',
                'phone_number' => '+10555555555',
                'email' => 'jegu@gwapo.com',
                'gender' => 'M',
                'address' => 'LP Hypermart',
                'city' => 'Bagacay',
                'country' => 'Russia',
                'zip_code' => '56287555',
                'created_at' => NULL,
                'updated_at' => '2025-03-06 18:59:29',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 3,
                'id_no' => '328291',
                'first_name' => 'unggoy',
                'last_name' => 'dakog-itlog',
                'arrival_date' => '2025-03-05',
                'nationality' => 'Pinoy',
                'passport_number' => '6788990',
                'phone_number' => '096369988745',
                'email' => 'dodot@pisot.com',
                'gender' => 'M',
                'address' => 'Banica',
                'city' => 'Calindagan',
                'country' => 'Philippines',
                'zip_code' => '9193',
                'created_at' => '2025-02-25 19:23:27',
                'updated_at' => '2025-03-06 14:56:07',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 5,
                'id_no' => '156380',
                'first_name' => 'Gwapo',
                'last_name' => 'Paslot',
                'arrival_date' => '2025-02-28',
                'nationality' => 'Black African',
                'passport_number' => '25874156',
                'phone_number' => '09636955555',
                'email' => 'pogi@paslot.com',
                'gender' => 'M',
                'address' => 'Banica River',
                'city' => 'Calindagan',
                'country' => 'Philippines',
                'zip_code' => '7879',
                'created_at' => '2025-02-25 19:28:19',
                'updated_at' => '2025-03-06 14:56:10',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 6,
                'id_no' => '948061',
                'first_name' => 'Inday',
                'last_name' => 'Hamis',
                'arrival_date' => '2025-02-28',
                'nationality' => 'Amerkana',
                'passport_number' => '985689874',
                'phone_number' => '0900000000',
                'email' => 'inday@gwapa.com',
                'gender' => 'F',
                'address' => 'Canada',
                'city' => 'Dumaguete',
                'country' => 'USA',
                'zip_code' => '3505',
                'created_at' => '2025-02-25 19:30:09',
                'updated_at' => '2025-02-27 21:16:36',
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 7,
                'id_no' => '396347',
                'first_name' => 'Kenneth',
                'last_name' => 'Hitler',
                'arrival_date' => '2025-03-08',
                'nationality' => 'German',
                'passport_number' => 'N/A',
                'phone_number' => '090098765443',
                'email' => 'hitler@k.com',
                'gender' => 'M',
                'address' => 'Loocs',
                'city' => 'Berlins',
                'country' => 'Germany',
                'zip_code' => '6570',
                'created_at' => '2025-02-25 19:35:54',
                'updated_at' => '2025-03-07 16:17:20',
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 8,
                'id_no' => '219008',
                'first_name' => 'San',
                'last_name' => 'Goku',
                'arrival_date' => '2025-02-26',
                'nationality' => 'China',
                'passport_number' => NULL,
                'phone_number' => '0966666666',
                'email' => 'san@goku.com',
                'gender' => 'M',
                'address' => 'Planet Nemek',
                'city' => 'Nemek',
                'country' => 'China',
                'zip_code' => '7896',
                'created_at' => '2025-02-26 15:11:26',
                'updated_at' => '2025-02-26 20:15:07',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 11,
                'id_no' => '973983',
                'first_name' => 'Prince',
                'last_name' => 'Vegeta',
                'arrival_date' => '2025-02-27',
                'nationality' => 'Saiyajin',
                'passport_number' => '4778559996585',
                'phone_number' => '+639956565660',
                'email' => 'prince@vegeta.com',
                'gender' => 'M',
                'address' => 'Nemek',
                'city' => 'Habitat',
                'country' => 'Iraq',
                'zip_code' => '6200',
                'created_at' => '2025-02-26 17:39:18',
                'updated_at' => '2025-02-27 14:23:21',
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 12,
                'id_no' => '206523',
                'first_name' => 'Iga',
                'last_name' => 'Gabiga',
                'arrival_date' => '2025-03-08',
                'nationality' => 'Zimba',
                'passport_number' => '5858585',
                'phone_number' => '0965444445',
                'email' => 'iga@gabiga.com',
                'gender' => 'F',
                'address' => 'Purok Mansanitas',
                'city' => 'Talay',
                'country' => 'Zimbabwe',
                'zip_code' => '99990',
                'created_at' => '2025-02-27 17:15:29',
                'updated_at' => '2025-03-07 16:19:16',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}
