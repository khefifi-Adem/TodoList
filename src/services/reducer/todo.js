import {ADD_TODO, TOGGLE_TODO} from "../action/actionType";

const initialState = {
    todos: [
        {
        id: '123456789',
        description: 'hi there',
        done: true
        }
    ]
}

const todos = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO: {
            const {id, description, isDone} = action.payload
            return {
                todos: [
                    ...state.todos,
                    {id, description, isDone}
                ]
            }
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            const todos = state.todos.map(obj => {
                return obj.id === id ? {...obj, isDone: !obj.isDone} : obj
            })
            return todos
        }
        default:
            return state;
    }
}

export default todos;