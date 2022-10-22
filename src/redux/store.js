import { combineReducers, createStore } from "redux";
import toDoListReducer from "../reducers/ToDoListReducer";

const rootReducer = combineReducers({ toDoListReducer });

const store = createStore(rootReducer);

export default store;
