import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./login/reducer";
import thunk from "redux-thunk";
import studentsReducer from "./data/reducer";

const rootReducer = combineReducers({
  AuthReducer: reducer,
  StudentsData: studentsReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
