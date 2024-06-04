import { ADD_NEW_TODO, ADD_NEW_TODO_NUMBER } from "../../types/todoTypes"

export const addTodo = (todo) => {
    return{
        type:ADD_NEW_TODO,
        payload: todo ,
    }
}