import {
    ADD_NAME,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    MARK_COMPLETED
  } from "../actions/actionTypes";

const initialState = {
    todoName: '',
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
              isActiv: true,
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
  
        case MARK_COMPLETED:
          const { todoIdComplet,todoIsActiv } = action.payload;
          console.log(todoIsActiv)
          const completTodos = state.todos.filter((todo) => {
            return todo.id !== todoIdComplet;
          });
          const completTodo = state.todos.find((todo) => todo?.id === todoIdComplet);
          completTodo.isActiv = todoIsActiv;
          completTodos.push(completTodo);
          debugger
          return {
            ...state,
            todos: [...completTodos],
          };

      default:
        return state;
    }
  };
