import { nameReduccer } from './todoReducer'
import { addNewName } from '../actions/index'
// import { initialState } from './todoReducer'
 

test('renders learn react link', () => {
  const state = {
    todoName: '',
    todos: [],
}

  const action = addNewName('Kostya');

  const result = nameReduccer(state,action);
  expect(result).toEqual({
    todoName:'Kostya',
    todos:[]
  })
});

