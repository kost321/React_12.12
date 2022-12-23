import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import TodosList from "../TodosList/TodosList";
import { selecteName, selectTodos } from "../../redux/selectors/todoSelectors";

import './addTodo.css'

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const name = useSelector(selecteName);
    const todos = useSelector(selectTodos);
    const [count, setCount] = useState();

    const handleAdd = () => {
        dispatch(addNewTodo(text));
        setText('');
    };

    return (
        <>
            <div className="information-block">
                <h2>{name.text}</h2>
                <input className="count-input" value={`Активные задачи:${todos.length}`} readOnly/>
            </div>    
            <div className="main-div">
                <input type="text" placeholder="Add a New Task" value={text} onChange={event => setText(event.target.value)} />
                <button className="add-btn" onClick={() => handleAdd()}>Add</button>
            </div>
            <TodosList/>
        </>
    )
}

export default AddTodo;
