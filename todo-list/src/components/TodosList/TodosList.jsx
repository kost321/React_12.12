import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, editTodos } from '../../redux/selectors/todoSelectors'
import { deleteTodo } from "../../redux/actions";
import { editTodo } from "../../redux/actions";
import { updateTodo } from "../../redux/actions";

import './todoList.css'

const TodosList = () => {
    const [edit, setEdit] = useState (false);
    const todos = useSelector(selectTodos);
    const changeEditTodo = useSelector(editTodos)
    const [text, setText] = useState()
    const dispatch = useDispatch();

    const handleEdit = (id) => {
      setEdit(true);
      dispatch(editTodo(id));
  };    

    const handleUpdateTodo = (id) => {
      if(text === undefined) {
        setEdit(false)  
      } else {
        dispatch(updateTodo(id,text,todos));
        setEdit(false)
      }
      
    }

    return (
      <div className="container-todo">
          {edit ? changeEditTodo.map(todo => {
              return(
                <div key={todo.id}>
                  <input type="text" placeholder="Add a New Task" defaultValue={todo.text} onChange={(event) => setText(event.target.value)}/>
                  <button className="add-btn" onClick={() => handleUpdateTodo(todo.id)}>Ok</button>
                </div>
              )
            }) : todos.map(todo=> {
              return (
                <div className="task-box" key={todo.id}>
                  <div className="task" >
                    <h3>{todo.text}</h3>
                  </div>
                  <div className="settings">
                    <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    <button className="delete-btn" onClick={() => handleEdit(todo.id)}>Edit</button>
                  </div>
                </div>   
              )
            })
          }
      </div>       
    )
}

export default TodosList
