import thunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { TestReducer } from "./reducers/testreducer";

const middleware = [thunk, logger];

const reducers = combineReducers({
    testing: TestReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;