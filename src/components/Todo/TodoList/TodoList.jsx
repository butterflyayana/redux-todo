import TodoListitem from '../TodoListitem/TodoListitem'
import {useSelector} from "react-redux"

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
  return (
    <div>
      {todos?.map(td => <TodoListitem key={td.text} {...td} number={340}/>)}

    </div>
  )
}

export default TodoList