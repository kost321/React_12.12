import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, } from '../../redux/selectors/todoSelectors';
import { updateTodo, deleteTodo, markTodoCompleted } from "../../redux/actions";

import './todoList.css';

export const TodosList:React.FC = () => {
  const [edit, setEdit] = useState (false);
  const [editId, setEditId] = useState<number>();
  const todos = useSelector(selectTodos);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleEdit = (id:number, text:string) => {
    setText(text);
    setEdit(true);
    setEditId(id);
  };

  const handleUpdateTodo = (id:number) => {
    if(text === undefined) {
      setEdit(false);  
    } else {
      debugger
      dispatch(updateTodo(id, text));
      setEdit(false);
    }
  }
    
  const handleClick = (id:number, event:any) => {
    let addClass = event.target.classList.toggle("crossed-line");
    if(addClass) {
      dispatch(markTodoCompleted(id, false));
    } else {
      dispatch(markTodoCompleted(id, true));
    }
  }

  return (
    <div className="container-todo">
      {edit ? 
        <>
          <input type="text" placeholder="Add a New Task" defaultValue={text} onChange={(event) => setText(event.target.value)}/>
          <button className="add-btn" onClick={() => handleUpdateTodo(editId!)}>Ok</button>
        </> : todos.map((todo) => {
                return (
                  <div className="task-box" key={todo.id}>
                    <div className="task">
                      <h3 onClick = {(event) => handleClick(todo.id, event)}>{todo.text}</h3>
                    </div>
                    <div className="settings">
                      <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                      <button className="delete-btn" onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                    </div>
                  </div>   
                )
              })
      }
    </div>       
    )
}
