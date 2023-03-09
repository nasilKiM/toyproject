import { combineReducers } from "redux";
import reducer from "./diaryCom";

export const rootReducer = combineReducers({ diaryPost: reducer });
