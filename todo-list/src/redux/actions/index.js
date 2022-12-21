import {
    ADD_TODO,
    DELETE_TODO,
    CLEAR_ALL_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    MARK_COMPLETED,
  } from "./actionTypes";
  
  export const addNewTodo = (text) => {

    return {
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        text: text,
        completed: false
      },
    };
  };
//   export const deleteTodo = (id) => {
//     return {
//       type: DELETE_TODO,
//       id,
//     };
//   };
  
//   export const clearAlltodo = () => {
//     return {
//       type: CLEAR_ALL_TODO,
//     };
//   };
  
//   export const editTodo = (id) => {
//     return {
//       type: EDIT_TODO,
//       payload: {
//         id: id,
//       },
//       isEdit: true,
//     };
//   };
  
//   export const updateTodo = (id, todo) => {
//     return {
//       type: UPDATE_TODO,
//       payload: {
//         todoId: id,
//         todoTitle: todo?.title,
//         todoDescription: todo?.description,
//       },
//     };
//   };
  
//   export const markTodoCompleted = (id) => {
//     return {
//       type: MARK_COMPLETED,
//       payload: {
//         selectedTodoId: id
//       }
//     }
//   }
