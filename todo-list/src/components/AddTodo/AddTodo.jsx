import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import TodosList from "../TodosList/TodosList";
import { selecteName, selectTodos } from "../../redux/selectors/todoSelectors";
import { useNavigate } from 'react-router-dom'

import './addTodo.css'

export const AddTodo = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const name = useSelector(selecteName);
    const todos = useSelector(selectTodos);

    const handleAdd = () => {
        dispatch(addNewTodo(text));
        setText('');
    };

    const handleTabs = () => {
        navigate('/todotabs')
    }

    const todoCount = todos.filter((item) =>{
        return item.isActiv === true
    } );

    return (
        <>
            <div className="information-block">
                <h3>{name.text}</h3>
                <input className="count-input" value={`Активные задачи:${todoCount.length}`} readOnly/>
                <button className="add-btn" onClick={() => handleTabs()}>Tabs</button>
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
