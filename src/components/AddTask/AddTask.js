import React, {useState} from "react";
import './AddTask.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../services/reducers-actions/todoSlice";

const AddTask = () =>{
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodos = () => {
           dispatch(addTodo(
               {
                   id: Date.now(),
                   description: input,
                   done:false
               }
           ))
           console.log ('Added seccessfully');
       }
    return (
        <div className="containerr">
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodos}>Add Task</button>
        </div>
    )
}

export default AddTask;