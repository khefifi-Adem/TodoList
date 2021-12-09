import {ADD_TODO, TOGGLE_TODO} from "./actionType";

export const addTodo = description =>({
    type : ADD_TODO,
    payload: {
        id: Date.now(),
        description,
        isDone: false
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {id}
});