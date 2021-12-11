import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionsTypes';


export const addTodo = description => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    description
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

