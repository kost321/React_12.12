import { RootState } from '../store/index'

export const selectTodos = (state:RootState) => state.todoReducer.todos;
export const selecteName = (state:RootState) => state.nameReduccer.todoName;