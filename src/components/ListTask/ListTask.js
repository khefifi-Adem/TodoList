import React, {useEffect, useState} from "react";
import './ListTask.css'
import {useDispatch, useSelector} from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import todo from "../../services/reducer/todo";
import {toggleTodo} from '../../services/action/action'



const ListTask = () =>{



    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);

    const handleCheck = () => dispatch (toggleTodo(todo.id));

    useEffect(() => {
        setChecked(todo.isDone)
    }, [todo]);

    const {todos} = useSelector(state => state)
    console.log(todos);


    return (
        <div className="container">
            {todos.todos.length ? todos.todos.map(todo => (
                <ul className="todoitem">
                    <li key={todo.id}>
                        <Checkbox onChange={handleCheck} checked={checked}/>
                        <span >{todo.description} </span>
                    </li>
                </ul>
            )): <p>No todos <i className="fas fa-poo"></i></p>}


        </div>
    )
 }

export default ListTask;