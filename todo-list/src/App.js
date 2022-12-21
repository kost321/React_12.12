import React from 'react';
import './App.css';
import TodosList from './components/TodosList/TodosList';
import AddTodo from './components/AddTodo/AddTodo';

export default function App() {
  return (
    <>
      <AddTodo />
      <TodosList />
    </>
  );
}
