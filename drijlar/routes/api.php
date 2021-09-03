<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\wrokcontrol;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/todo',[wrokcontrol::class,'create']);
Route::get('/todo/{id}',[wrokcontrol::class,'create1']);
Route::post('/todo',[wrokcontrol::class,'c1']);
Route::put('/todo/{id}',[wrokcontrol::class,'c2']);
Route::delete('/todo/{id}',[wrokcontrol::class,'c3']);

