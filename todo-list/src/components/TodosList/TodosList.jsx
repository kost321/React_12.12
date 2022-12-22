import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from '../../redux/selectors/todoSelectors'
import { deleteTodo } from "../../redux/actions";
import { editTodo } from "../../redux/actions";

import './todoList.css'

const TodosList = () => {
    const [edit, setEdit] = useState (false);
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const handleEdit = (id) => {
      setEdit(true);
      dispatch(editTodo(id));
  };    
    return (
      <div className="container-todo">
        {todos.map(todo => {
          return (
            <div className="task-box" key={todo.id}>
              <div className="task" >
                <input type="checkbox" />
                <h3>{todo.text}</h3>
              </div>
              <div className="settings">
                <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                <button className="delete-btn" onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            </div>   
          )
        })}
      </div>       
    )
}

export default TodosList
