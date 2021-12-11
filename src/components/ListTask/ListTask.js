import React from "react";
import './ListTask.css'
import {useSelector} from "react-redux";
import {getTodosByVisibilityFilter} from "../../services/action/selector";
import {Todo} from "../todo/Todo";



const ListTask = () =>{

    const { todos, visibilityFilter } = useSelector(state => state);
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);



    return (
        <div className="container">
            {filterTodos.length ? filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo}/>
            )): <p>No todos <i className="fas fa-poo"></i></p>}


        </div>
    )
 }

export default ListTask;