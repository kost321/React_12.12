import {
    ADD_NAME,
    ADD_TODO,
    DELETE_TODO,
    CLEAR_ALL_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    MARK_COMPLETED,
  } from "../actions/actionTypes";

const initialState = {
    todoName: [],
    todos: [],
    editTodo: []
}


export const nameReduccer = (state = initialState, action) => {
  if(action.type === ADD_NAME) {
    let name = action.payload;
    return {
      ...state,
      todoName: name 
    }
  } else {
    return state;
  }
}
  
export const todoReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TODO:
      const{id, text} = action.payload;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id:id,
              text: text,
            }
          ]
        };      

      case DELETE_TODO:
        const newTodoList = state.todos.filter((item) => item.id !== action.id);
        return {
          ...state,
          todos: newTodoList,
        };
  
      case EDIT_TODO:
        const editTodo = action.payload;
        let newEditTodo = state.todos.find((item) => item.id === editTodo.id);
        return {
          ...state,
          editTodo: [newEditTodo]
        };
  
      case UPDATE_TODO:
        const { todoId, todoText } = action.payload;
        const todos = state.todos.filter((todo) => {
          return todo.id !== todoId;
        });
        const todo = state.todos.find((todo) => todo?.id === todoId);
        todo.text = todoText;
        todos.push(todo);
  
        return {
          ...state,
          todos: [...todos],
        };
  
    //   case MARK_COMPLETED:
    //     const { selectedTodoId } = action.payload;
    //     let allTodos = [];
  
    //     selectedTodoId.forEach((id) => {
    //       allTodos = state.todos.filter((todo) => {
    //         return todo.id !== id;
    //       });
  
    //       const selectedTodo = state.todos.find((todo) => todo?.id === id);
    //       selectedTodo.title = selectedTodo?.title;
    //       selectedTodo.description = selectedTodo?.description;
    //       selectedTodo.isCompleted = true;
    //       selectedTodo.isPending = selectedTodo?.isPending;
    //       allTodos.push(selectedTodo);
    //     });
  
    //     return {
    //       ...state,
    //       todos: [...allTodos],
    //       isEdit: false,
    //     };
  
  
      default:
        return state;
    }
  };
