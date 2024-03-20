import {combineReducers, createStore} from "redux";
import { addToCart } from "./reducers/addToCart";
import { dataProducts } from "./reducers/products";
import { notification } from "./reducers/notify";
const reducer=combineReducers({addToCart,dataProducts, notification});
export const store = createStore(reducer);