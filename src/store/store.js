import { combineReducers, createStore } from "redux";
import { squareReducer } from "./squareReducer";
import {arrowReducer} from "./arrowReducer"

const rootReducer = combineReducers({
    squareReducer,
    arrowReducer,
})

export const store = createStore(rootReducer)