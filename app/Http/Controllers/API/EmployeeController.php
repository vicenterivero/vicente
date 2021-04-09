<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;
class EmployeeController extends Controller
{
    //
        public function index(){
      return view("employee");
    }
    public function list_role(){
      $data = Role::get();

      $response['data'] = $data;
      $response['succes'] = true;
      return $response;
    }

    public function create(Request $request){

        try {

          $insert['name_lastname'] = $request['name'];
          $insert['email'] = $request['email'];
          $insert['city'] = $request['city'];
          $insert['direction'] = $request['address'];
          $insert['phone'] = $request['phone'];
          $insert['rol'] = $request['rol'];

          Employee::insert($insert);

          $response['message'] = "Save succesful";
          $response['succes'] = true;

        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['succes'] = true;
        }

        return $response;
      }
      public function list(){

        try {

          $data = Employee::with("role")->get();
          $response['data'] = $data;
          $response['success'] = true;

        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;

      }
}

