import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions";


export const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAdd = () => {
        dispatch(addNewTodo(text));
        setText('');
    };

    return (
        <div className="main-div">
            <input type="text" value={text} onChange={event => setText(event.target.value)} />
            <button onClick={() => handleAdd()}>Add</button>
        </div>
    )
}

export default AddTodo;
