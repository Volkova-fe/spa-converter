import { combineReducers } from "redux";
import { ratesReducer } from "./rates";

export const rootReducer = combineReducers({
	rates: ratesReducer,
});