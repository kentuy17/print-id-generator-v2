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

        \DB::table('tourists')->insert(array(
            0 =>
            array(
                'id' => 1,
                'first_name' => 'Dodot',
                'last_name' => 'Flores',
                'nationality' => 'African',
                'passport_number' => '0001',
                'phone_number' => '+6363333333',
                'email' => 'dodot@gwapo.com',
                'gender' => 'F',
                'address' => 'Banilad',
                'city' => 'Dumaguete',
                'country' => 'Philippines',
                'zip_code' => '6200',
                'arrival_date' => '2025-02-25',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 =>
            array(
                'id' => 2,
                'first_name' => 'Jegu',
                'last_name' => 'Pogi',
                'nationality' => 'Russian',
                'passport_number' => '666',
                'phone_number' => '+105555',
                'email' => 'jegu@gwapo.com',
                'gender' => 'M',
                'address' => 'Santa Monica',
                'city' => ' Manila',
                'country' => 'Philippines',
                'zip_code' => '56287',
                'arrival_date' => '2025-02-25',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 =>
            array(
                'id' => 3,
                'first_name' => 'unggoy',
                'last_name' => 'dakog-itlog',
                'nationality' => 'Philippines',
                'passport_number' => NULL,
                'phone_number' => '096369988745',
                'email' => 'dodot@pisot.com',
                'gender' => 'M',
                'address' => 'Banica',
                'city' => 'Calindagan',
                'country' => 'Philippines',
                'zip_code' => '9193',
                'arrival_date' => '2025-02-25',
                'created_at' => '2025-02-25 19:23:27',
                'updated_at' => '2025-02-25 19:23:27',
            ),
            3 =>
            array(
                'id' => 5,
                'first_name' => 'Gwapo',
                'last_name' => 'Pisot',
                'nationality' => 'Black African',
                'passport_number' => NULL,
                'phone_number' => '09636955555',
                'email' => 'pogi@pisot.com',
                'gender' => 'M',
                'address' => 'Banica',
                'city' => 'Calindagansssss',
                'country' => 'Philippines',
                'zip_code' => '7879',
                'arrival_date' => '2025-02-25',
                'created_at' => '2025-02-25 19:28:19',
                'updated_at' => '2025-02-25 19:28:19',
            ),
            4 =>
            array(
                'id' => 6,
                'first_name' => 'Inday',
                'last_name' => 'Hamis',
                'nationality' => 'Amerkana',
                'passport_number' => NULL,
                'phone_number' => '0900000000',
                'email' => 'inday@gwapa.com',
                'gender' => 'F',
                'address' => 'Canada',
                'city' => 'Dumaguete',
                'country' => 'USA',
                'zip_code' => '3505',
                'arrival_date' => '2025-02-25',
                'created_at' => '2025-02-25 19:30:09',
                'updated_at' => '2025-02-25 19:30:09',
            ),
            5 =>
            array(
                'id' => 7,
                'first_name' => 'Kenneth',
                'last_name' => 'Hitler',
                'nationality' => 'German',
                'passport_number' => NULL,
                'phone_number' => '090098765443',
                'email' => 'hitler@k.com',
                'gender' => 'M',
                'address' => 'Looc',
                'city' => 'Berlin',
                'country' => 'Germany',
                'zip_code' => '6570',
                'arrival_date' => '2025-02-25',
                'created_at' => '2025-02-25 19:35:54',
                'updated_at' => '2025-02-25 19:35:54',
            ),
            6 =>
            array(
                'id' => 8,
                'first_name' => 'San',
                'last_name' => 'Goku',
                'nationality' => 'China',
                'passport_number' => NULL,
                'phone_number' => '0966666666',
                'email' => 'san@goku.com',
                'gender' => 'M',
                'address' => 'Planet Nemek',
                'city' => 'Nemek',
                'country' => 'China',
                'zip_code' => '7896',
                'arrival_date' => '2025-02-26',
                'created_at' => '2025-02-26 15:11:26',
                'updated_at' => '2025-02-26 15:11:26',
            ),
        ));
    }
}
