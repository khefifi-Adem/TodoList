import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [{id:'1333265',description:'hhhhhhhhhhh',done: false}]
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
}
    }
});

export const {addTodo} = todoSlice.actions
export const todoListt = state => state.todoList
export default todoSlice.reducer