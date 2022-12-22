import React from 'react';
import './App.css';
import TodosList from './components/TodosList/TodosList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from './components/AddTodo/AddTodo';
import StartPage from './components/StartPage/StartPage';

export default function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/todolist' element={<AddTodo/>}/>
        </Routes>
      </div>
    </Router>
  );
}
