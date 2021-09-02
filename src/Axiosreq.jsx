import axios from 'axios';
import React, { useState } from 'react';
import "./div.css";

function Demo1()
{
    var[initial,setState]=useState([]);
    var[id1,setId]=useState();
    

    var click=()=>{
    axios.post("http://127.0.0.1:8000/api/todo/",
    {
        taskname:'nothing',
        taskdescription:'nothing'
    }
    ).then((response)=>{
    
    setState(response.data);

    console.log(response.data)})
    };
    
    // var Ds=()=>{
    //     console.log(initial);
        
    //     console.log(typeof(initial))};
    
    function todo()
    {    
        initial.map((c,id)=>{
            if(id==id1)
            {
                c.taskname = document.getElementById("input1").value;
                c.taskdetails = document.getElementById("input2").value;
             
                console.log("hi i am inside")
            
            }
            }
            )
            setState([...initial])
           console.log(initial)
         console.log(document.getElementById("input2").value)
        
    }

    function add()
    {
        var a=document.getElementById("input1").value;
        var b=document.getElementById("input2").value;
       
        setState([...initial, {taskname:a , taskdetails:b}])
        
        
    }

    function edit(ind)
    {
       
    //     console.log(ind)
    //    var ans= initial.find((c,id)=>id==ind);
    //    console.log(ans)
        setId(ind);
    initial.map((c,id)=>{
        if(id==ind)
        {
            document.getElementById("input1").value=c.taskname;
            document.getElementById("input2").value=c.taskdetails;

        
        }
        }
        )
       
       }
    function del(ind)
    {
       var a= initial.filter((c,id)=>id!=ind);
       setState(a);
    }
        
    return<> 
    
{  
    <div class="div">
    <h2>Todo application</h2>
    <label>Enter task name: </label> <input id="input1"  type="text"/> 
    <label>Enter details: </label> <input id="input2" type="text"/>
    <button onClick={add}>Add </button>
    <button onClick={todo}>Update</button>
    
    
     {initial.map((c,ind)=>

    
        
            
   <ul key={ind}>
   
   <li id="del" > Task name :{c.taskname}</li>
   <li id="del" > Task Details :{c.taskdetails}</li>
   <button onClick={()=>del(ind)} >delete</button>
   <button onClick={()=>edit(ind)}  >Edit</button>  
    </ul>)}
    </div> }
    
   
    </>
    ;
}

export default Demo1;
// export {Ds};
