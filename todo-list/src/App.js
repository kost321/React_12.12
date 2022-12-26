import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddTodo from './components/AddTodo/AddTodo';
import StartPage from './components/StartPage/StartPage';
import TabsTodo from './components/TabsTodo/TabsTodo';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/todolist' element={<AddTodo/>}/>
          <Route path='/todotabs' element={<TabsTodo/>}/>
        </Routes>
      </div>
    </Router>
  );
}
