import userReducer from "../reducers/user";
import { combineReducers } from "redux";
// The key of this object will be the name of the store
const rootReducers = combineReducers({ user: userReducer });
export default rootReducers;