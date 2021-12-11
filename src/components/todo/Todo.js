import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {toggleTodo} from "../../services/action/actions";
import Checkbox from "@mui/material/Checkbox";
import './Todo.css'


export const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleChecked = () => dispatch(toggleTodo(todo.id));

    useEffect(() => {
        setChecked(todo.isDone);
    }, [todo]);

    return (
        <ul className="todoitem">
            <li key={`todo-${todo.id}`}>
                <Checkbox onChange={ handleChecked } checked={checked}/>
                <div className='description-container' >
                    <p>{todo.description}</p>
                    <span className='icons'>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>

                    </span>
                </div>
            </li>
        </ul>
    )
}
