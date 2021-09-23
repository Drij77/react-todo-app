import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./div.css";

function Demo2()
{
    var[initial,setState]=useState([]);
    var[inid,setId]=useState();

    // var click=()=>{
    // axios.post("http://127.0.0.1:8000/api/todo/",
    // {
    //     taskname:'nothing',
    //     taskdescription:'nothing'
    // }
    // ).then((response)=>{
    
    // setState(response.data);

    // console.log(response.data)})
    // };
    var get=()=>{
        axios.get("http://127.0.0.1:8000/api/todo").then((response)=>{
        
        setState(response.data);
    
        console.log(response.data)
    
       })
        };

     useEffect(()=>{get()},[]);   

// eslint-disable-line no-use-before-define
  
    // eslint-disable-line no-use-before-define
   
    
    function post()
    {
        var a=document.getElementById("input1").value;
        var b=document.getElementById("input2").value;
        var c=document.getElementById("input3").value;
       
        axios.post("http://127.0.0.1:8000/api/todo/",
    {
        taskname:a,
        taskdesciption:b,
        stat_id:c
    }
    ).then((response)=>{

      
    
    setState([...initial,response.data]);

    console.log(response.data)})
    }


      
    function del(id)
    {
        // var a=document.getElementById("input1").value;
        // var b=document.getElementById("input2").value;
        // var c=document.getElementById("input3").value;
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`,
  
    ).then((response)=>{
    
    get();

    console.log("deleted succesfully")})
    }


    function put()
    {
        console.log(inid);
        var a=document.getElementById("input1").value;
        var b=document.getElementById("input2").value;
        var c=document.getElementById("input3").value;
       
        
        
        axios.put(`http://127.0.0.1:8000/api/todo/${inid}`,
    {
        taskname:a,
        taskdesciption:b,
        stat_id:c
    }
    ).then((response)=>{
    
    get();

    console.log(response.data)})
    }

    // useEffect(()=>{click2();
    // }
    // )
    

    function edit(ind,id1)
    {
        console.log(id1)
        setId(id1);
        // eslint-disable-line no-use-before-define
        initial.map((c,id)=>{
            if(id===ind)
            {
                document.getElementById("input1").value=c.taskname;
                document.getElementById("input2").value=c.taskdesciption;
                document.getElementById("input3").value=c.stat_id;
       
            
            }
            }
            )
    }
        function drij22(iid,id1)
        {
            console.log("medkmekdmk");
            console.log(iid);
            // var a=document.getElementById("input1").value;
            // var b=document.getElementById("input2").value;
            // var c=document.getElementById("val").value; // eslint-disable-line no-use-before-define
           
            // console.log(c)
            // eslint-disable-line no-use-before-define
            initial.map((c,id)=>{ 
                if(id===iid) // eslint-disable-line no-use-before-define
                {
                    // c.taskname = document.getElementById("input1").value;
                    c.stat_id = document.getElementById("val").value;
                 
                    console.log("hi i am inside")
                    
                }
                return 0;
                }
                )
                setState([...initial])
               console.log(initial)
            //  console.log(document.getElementById("input2").value)


            axios.put(`http://127.0.0.1:8000/api/todo/${id1}`,
        {
            stat_id:document.getElementById("val").value
        }
        ).then((response)=>{
        
        // get();
    
        console.log(response.data)})
        }
    return<> 

    
    <div class="div">
    <h2>Todo application</h2>
    <label>Enter task name: </label> <input id="input1"  type="text"/> 
    <label>Enter details: </label> <input id="input2" type="text"/>
    <label>Enter task status: </label> 
    <select  id="input3">
   <option value="1">In todo</option>
   <option value="2">In progress</option>
   <option value="3">Complete</option>

</select>


    <button onClick={post}>Add </button>
    <button onClick={put}>Update</button>
    
    
     {initial.map((c,ind)=>
          <ul key={ind}>
   
        <li id="del" > Task name :{c.taskname}</li>
        <li id="del" > Task Details :{c.taskdesciption}</li>
        <li id="del" > Task status : {c.stat_id==1?<span>In todo</span>:
        (c.stat_id==2?<span>In progress</span>:
            (c.stat_id==3?<span>Complete</span>:0)
            
            )
        
    }
       
        
        </li>
        <button onClick={()=>del(c.id)} >delete</button>
        <button onClick={()=>edit(ind,c.id)}  >Edit</button>  
        </ul>
    )}
    </div> 
    </>
    ;
}

export default Demo2;
// export {Ds};
