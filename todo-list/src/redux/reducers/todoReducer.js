import {
    ADD_NAME,
    ADD_TODO,
    DELETE_TODO,
    CLEAR_ALL_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    MARK_COMPLETED,
  } from "../actions/actionTypes";
  
//   const initialState = {
//     todos: [{
//       id: Date.now(),
//       complete: false,
//       text: ""
//     }],
//     isEdit: false,
//     editTodoId: "",
//   };



const initialState = {
    todos: []
}


export const nameReduccer = (state = initialState, action) => {
  if(action.type === ADD_NAME) {
    let name = action.payload;
    return {
      ...state,
      todos: name 
    }
  } else {
    return state;
  }
}
  
export const todoReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TODO:
      const{id, text, complelted} = action.payload;
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id:id,
              text: text,
              complelted: complelted
          }]

        };

      // case ADD_NAME:
      //   let name = action.payload;
      //   console.log(name)
      //   return {
      //     ...state,
      //     todos: name
      //   };        

      case DELETE_TODO:
        const newTodoList = state.todos.filter((item) => item.id !== action.id);
        return {
          ...state,
          todos: newTodoList,
        };
  
      case EDIT_TODO:
        const editTodo = action.payload;
        let newEditTodo = state?.todos?.find((item) => item?.id === editTodo?.id);
        debugger
        return {
          ...state,
          isEdit: action.isEdit,
          editTodo: newEditTodo,
        };
  
    //   case UPDATE_TODO:
    //     const { todoId, todoTitle, todoDescription } = action.payload;
    //     const todos = state.todos.filter((todo) => {
    //       return todo.id !== todoId;
    //     });
  
    //     const todo = state.todos.find((todo) => todo?.id === todoId);
    //     todo.title = todoTitle;
    //     todo.description = todoDescription;
    //     todo.isCompleted = todo?.isCompleted;
    //     todo.isPending = todo?.isPending;
    //     todos.push(todo);
  
    //     return {
    //       ...state,
    //       todos: [...todos],
    //       isEdit: false,
    //     };
  
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
