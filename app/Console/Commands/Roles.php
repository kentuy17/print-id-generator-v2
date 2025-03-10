<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use App\Models\User;

class Roles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:roles';

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
        //
	$admin_role = Role::create(['name' => 'admin']);
	$admin_perm = Permission::create(['name' => 'full access']);

	$user_role = Role::create(['name' => 'operator']);
	$user_perm = Permission::create(['name' => 'print ID']);

	$admin_role->givePermissionTo($admin_perm);
	$user_role->givePermissionTo($user_perm);

	$admin = User::find(1);
	$admin->assignRole('admin','operator');
	
	$user = User::find(2);
	$user->assignRole('operator');
	
    }
}
