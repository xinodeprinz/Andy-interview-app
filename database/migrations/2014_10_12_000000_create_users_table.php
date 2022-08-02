<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('primary_school');
            $table->string('grade');
            $table->string('school');
            $table->boolean('has_paid_fees');
            $table->boolean('correct_code');
            $table->string('online_interview');
            $table->string('password');
            $table->string('guardian_name');
            $table->string('guardian_gender');
            $table->date('guardian_date_of_birth');
            $table->string('guardian_relationship');
            $table->string('guardian_email');
            $table->string('guardian_phone_number');
            $table->string('guardian_occupation');
            $table->string('guardian_address');
            $table->string('birth_certificate');
            $table->string('slip');
            $table->string('photo');
            // $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}