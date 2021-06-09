import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import storeReducer from "./storeReducer";

// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer,
  storeReducer,
  authReducer
});

export default rootReducer;
