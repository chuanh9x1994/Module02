import {combineReducers,createStore} from 'redux'
import {countReducer} from './reducer/countReducer'

const reducer=combineReducers({countReducer});      // gộp tất cả các reducer trong toàn bộ dự án vào store
export const store1 = createStore(reducer);         // tạo store có tên là store1