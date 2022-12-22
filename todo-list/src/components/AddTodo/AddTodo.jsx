import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import TodosList from "../TodosList/TodosList";
import { selecteName } from "../../redux/selectors/todoSelectors";

import './addTodo.css'

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const name = useSelector(selecteName);


    const handleAdd = () => {
        dispatch(addNewTodo(text));
        setText('');
    };
    console.log(name)
    return (
        <>
            <h2>{name.text}</h2>
            <div className="main-div">
                <input type="text" placeholder="Add a New Task" value={text} onChange={event => setText(event.target.value)} />
                <button className="add-btn" onClick={() => handleAdd()}>Add</button>
            </div>
            <TodosList/>
        </>
    )
}

export default AddTodo;
