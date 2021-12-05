import React, {useState} from "react";
import './AddTask.css'
import {useDispatch} from "react-redux";
import {todoadd} from "../../services/action-creators/index"

const AddTask = () =>{
    
    const dispatch = useDispatch()
    const addTodo = () => {
           dispatch(todoadd(
               {
                   id: Date.now(),
                   description: document.getElementById("item").value,
                   done:false
               }
           ))
           console.log ('Added seccessfully');
       }
    return (
        <div className="containerr">
            <input id='item' type="text" />
            <button onClick={addTodo}>Add Task</button>
        </div>
    )
}

export default AddTask;