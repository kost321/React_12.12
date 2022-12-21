import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from '../../redux/selectors/todoSelectors'


const TodosList = () => {
    const todos = useSelector(selectTodos);
    return (
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    )
}

export default TodosList
