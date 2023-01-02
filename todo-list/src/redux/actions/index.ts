import {
    ADD_NAME,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    MARK_COMPLETED,
  } from "./actionTypes";
  
  export const addNewName = (text:string) => {
    return {
      type: ADD_NAME,
      payload: text,
    };
  };

  export const addNewTodo = (text:string) => {
    return {
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        text: text,
        isActiv : true
      },
    };
  };

  export const deleteTodo = (id:number) => {
    return {
      type: DELETE_TODO,
      id,
    };
  };
  
  export const updateTodo = (id:number, text:string) => {
    return {
      type: UPDATE_TODO,
      payload: {
        todoId: id,
        todoText: text,
      },
    };
  };
  
  export const markTodoCompleted = (id:number,isActiv:boolean) => {
    return {
      type: MARK_COMPLETED,
      payload: {
        todoIdComplet: id,
        todoIsActiv: isActiv
      }
    }
  }

  
