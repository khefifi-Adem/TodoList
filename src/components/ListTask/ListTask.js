import React from "react";
import './ListTask.css'
import {Checkbox} from "@mui/material";
import {useSelector} from "react-redux";
import {todoListt} from "../../services/reducers-actions/todoSlice";


const ListTask = () =>{
    const handleCheck = ()=> {

    }
    const selectedTodoList = useSelector(todoListt)

    return (
        <div className="container">
            <ul className="todoitem">
                {

                    selectedTodoList.map(item=>{ return(

                    <li key={item.id}>

                        <Checkbox
                            checked={item.done}
                            color="primary"
                            onChange={handleCheck}
                            inputProps={{'aria-label': 'secondary checkbox'}}
                        />

                        <p className={item.done && 'todoItem-done'}>
                          {item.description}
                        </p>
                    </li>
                    )}


                )}
            </ul>
        </div>
    )
 }

export default ListTask;