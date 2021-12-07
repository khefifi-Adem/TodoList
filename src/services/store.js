import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './reducers-actions/todoSlice'
export const store = configureStore(
    {
        reducer: {
        todo: todoReducer
        }
    }

)