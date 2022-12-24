import {
    ADD_NAME,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    MARK_COMPLETED,
  } from "./actionTypes";
  
  export const addNewName = (text) => {
    return {
      type: ADD_NAME,
      payload: {
        text: text,
      },
    };
  };

  export const addNewTodo = (text) => {
    return {
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        text: text,
        isActiv : true
      },
    };
  };

  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      id,
    };
  };
  
  export const updateTodo = (id, text) => {
    return {
      type: UPDATE_TODO,
      payload: {
        todoId: id,
        todoText: text,
      },
    };
  };
  
  export const markTodoCompleted = (id,isActiv) => {
    return {
      type: MARK_COMPLETED,
      payload: {
        todoIdComplet: id,
        todoIsActiv: isActiv
      }
    }
  }

  
