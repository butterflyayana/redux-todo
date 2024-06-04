import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../../store/actions/todoActions"

const TodoAdd = () => {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState("")
  const [inputNumber, setInputNumber] = useState("")
  const handleClick = () => {
    const newTodo = {
      text: inputText + ' ' + inputNumber
    }
    console.log(newTodo);
    dispatch(addTodo(newTodo))
  }
  return (
    <div>
      <input onChange={(evt) => {setInputText(evt.target.value)}} type="text" placeholder='add new todo' />
      <input onChange={(e) => {setInputNumber(e.target.value)}} type="text" placeholder="add new number" />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoAdd