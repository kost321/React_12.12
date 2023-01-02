import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/selectors/todoSelectors";
import { useNavigate } from 'react-router-dom';

import './tabsTodo.css'; 

export const TabsTodo:React.FC = () => {
    let navigate = useNavigate();
    const todos = useSelector(selectTodos);
    const [isActive, setIsActive] = useState(true);


    let handleBack = () => {
        navigate('/todolist');
    }

    const todoNotActive = todos.filter((item) => {
        return item.isActiv === false;
    });

    const todoActive = todos.filter((item) => {
        return item.isActiv === true;
    });

    return (
        <>
            <div className="information-task-block">
                <button className="add-btn" onClick={() => handleBack()}>Назад</button>
            </div>
            <div className="tabs-task-container">
                <input className="radio" id="one" name="group" type="radio" defaultChecked/>
                <input className="radio" id="two" name="group" type="radio"/>
                <div className="tabs">
                    <label className="tab" id="one-tab" htmlFor="one" onClick={() => setIsActive(true)}>Активные задачи</label>
                    <label className="tab" id="two-tab" htmlFor="two" onClick={() => setIsActive(false)}>Неактивные задачи</label>
                </div>
            </div>
            {isActive ? todoActive.map((todo) => (
                <div key={todo.id}>
                    <div className="tabs-task-box" >
                        <h3>{todo.text}</h3>
                    </div>
                </div>
                )) : todoNotActive.map((todo) => (
                    <div key={todo.id}>
                        <div className="tabs-task-box" >
                            <h3>{todo.text}</h3>
                        </div>
                    </div>
                )
            )}
        </>
    )
}
