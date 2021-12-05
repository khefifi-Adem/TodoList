import React from "react";
import './ListTask.css'
import {useSelector} from "react-redux";
// const todoList = [
//     {
//     id: '123456789',
//     description: 'clean dishes',
//     done:false
//     },
//     {
//         id: '345678912',
//         description: 'die ',
//         done:false
//     },
//     {
//         id: '567891234',
//         description: 'Back to live',
//         done:true
//     },
//     {
//         id: '789123456',
//         description: 'by by',
//         done:false
//     },
// ]
const ListTask = () =>{
const todoList = useSelector((state)=> state.todos);

    return (
        <div className="container">
            <ul>
                {
                    todoList.map(item=>{ return(
                    <li key={item.id}>{item.description}</li>
                    )}


                )}
            </ul>
        </div>
    )
}

export default ListTask;