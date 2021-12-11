import React, {useState} from "react";
import './AddTask.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../services/action/actions";


const AddTask = () =>{
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        console.log('Added successfully')
        setValue('');
    }

    const handleInput = e => {
        setValue(e.target.value);
    }
    return (
        <div className="containerr">
            <input value={value} type='text' onChange={handleInput} />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default AddTask;