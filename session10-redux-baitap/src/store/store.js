import { combineReducers, createStore } from "redux"
import { countJob } from "./reducer/countJob"
import { addJob } from "./reducer/addJob";

const reducer = combineReducers({countJob, addJob});
export const store = createStore(reducer);