import { ADD_NEW_TODO, ADD_NEW_TODO_NUMBER } from "../../types/todoTypes"

const todoState = {
    todos: []
}
 const todoReducer = (state = todoState, action) => {
    const {type, payload} = action 
    switch (type) {
        case ADD_NEW_TODO:
            return {
                todos: [...state.todos,payload]
            }
            case ADD_NEW_TODO_NUMBER:
                return {
                    todos: [...state.todos,payload]
                }
            default: return state
        }
        
 }

 export default todoReducer