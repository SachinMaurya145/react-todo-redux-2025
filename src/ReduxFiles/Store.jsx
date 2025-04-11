import { createStore } from "redux";
import { todoReducer } from "./reducer";
import { composeWithDevTools } from '@redux-devtools/extension';


// Create Redux store and pass the reducer
export const store = createStore(todoReducer , composeWithDevTools());
