import { combineReducers, createStore } from "redux";
import { squareReducer } from "./squareReducer";
import {arrowReducer} from "./arrowReducer";
import { resultReducer } from "./resultReducer";

const rootReducer = combineReducers({
    squareReducer,
    arrowReducer,
    resultReducer
})

export const store = createStore(rootReducer)