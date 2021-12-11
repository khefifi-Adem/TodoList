import { ADD_TODO, TOGGLE_TODO } from '../action/actionsTypes';

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, description } = action.payload;
      return {
        todos: [
          ...state.todos,
          { description, isDone: false, id }
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, isDone: !obj.isDone } : obj);
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;
