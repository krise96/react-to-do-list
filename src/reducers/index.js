import { combineReducers } from 'redux';
import modalReducer from "./ModalReducer";
import toDoReduser from "./ToDoReduser";
const rootReducer = combineReducers({
  modalReducer,
  toDoReduser
});
export default rootReducer;