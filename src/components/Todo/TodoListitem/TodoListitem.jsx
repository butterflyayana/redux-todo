
import PropTypes from 'prop-types'

const TodoListitem = (props) => {
  return (
    <div>
      {props.text}
      {props.number}
    </div>
  )
}

export default TodoListitem

TodoListitem.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number
}