import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewName } from "../../redux/actions";
import { selecteName } from "../../redux/selectors/todoSelectors";
import { useNavigate } from 'react-router-dom';


export const StartPage = () => {
    let navigate = useNavigate();
    const[nameValue, setNameValue] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(selecteName);

    const handleAdd = () => {
        dispatch(addNewName(nameValue));
        navigate('/todolist');
        setNameValue('');
    };

    return (
        <div className="main-div">
            <div>{name.text}</div>
            <input type="text" placeholder="Enter your name" value={nameValue} onChange={event => setNameValue(event.target.value)}/>
            <button className="add-btn" onClick={() => handleAdd()}>Сохранить</button>
        </div>
    )
}
