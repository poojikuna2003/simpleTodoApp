// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoTitle, onDeleteTodo} = props
  const {title, id} = todoTitle

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="each-todo-item">
      <p className="title-description">{title}</p>
      <button className="button-container" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
