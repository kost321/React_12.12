import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewName } from "../../redux/actions";
import { selecteName } from "../../redux/selectors/todoSelectors";
import { useNavigate } from 'react-router-dom';


export const StartPage:React.FC = () => {
    let navigate = useNavigate();
    const[nameValue, setNameValue] = useState<string>('');
    const dispatch = useDispatch();
    const name = useSelector(selecteName);

    const handleAdd = () => {
        dispatch(addNewName(nameValue));
        navigate('/todolist');
        setNameValue('');
    };

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value);
    }

    return (
        <div className="main-div">
            <div>{name}</div>
            <input type="text" placeholder="Enter your name" value={nameValue} onChange={changeHandler}/>
            <button className="add-btn" onClick={handleAdd}>Сохранить</button>
        </div>
    )
}
