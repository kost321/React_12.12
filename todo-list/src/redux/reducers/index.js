import { combineReducers } from "redux";
import { todoReducer, nameReduccer} from './todoReducer';

const reducers =  combineReducers({
    todoReducer,
    nameReduccer,
})

export default reducers;
