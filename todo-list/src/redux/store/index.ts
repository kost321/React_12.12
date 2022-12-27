import { createStore } from "redux";
import reducer from '../reducers/index';


const store = createStore(
    reducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export type RootState = ReturnType<typeof store.getState>


export default store;