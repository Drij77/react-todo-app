<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\todo;
use Validator;

class wrokcontrol extends Controller
{
    function  create()
    {
        return response()->json (todo::all(),200);
    }
    function  create1($id)
    {
        $demo= todo::find($id);
        if(is_null($demo))
        {
            return response()->json(['message'=>'data not found'],404);
        }
        return response()->json ($demo::find($id),200);
    }
    function c1(Request $request)
    {
        
        $rules=array(
            'taskname' => 'required|max:100',
            'taskdesciption' => 'required|max:100'
        );
    
        $validator=Validator::make($request->all(),$rules);
   
        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }
        $demo= new todo();
        $demo->taskname=$request->taskname;
        $demo->taskdesciption=$request->taskdesciption;
        $demo->stat_id=$request->stat_id;
        
        $demo->save();
        return response()->json ($demo,201) ;
    }
    function c2(Request $request, $id)
    {
      



        $demo= todo::find($id);
        // $demo->taskname=$request->input("taskname");
        // $demo->taskdescription=$request->input("taskdescription");
        if(is_null($demo))
        {
            return response()->json(['message'=>'data not found'],404);
        }
        $demo->update($request->all());
        // $demo->save();
        return response($demo,200);
    }
    function c3(Request $request, $id)
    {
      
       


        $demo= todo::find($id);
        if(is_null($demo))
        {
            return response()->json(['message'=>'data not found'],404);
        }
       $demo->delete();
        
        return response()->json(null,204);
    }
}
