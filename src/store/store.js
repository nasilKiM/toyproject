//상태가 관리되는 오직 하나뿐인 저장소의 역할
//f12 > action 에 쌓여서 보인다.(logger)

import { rootReducer } from "./@root";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const { createStore, applyMiddleware } = require("redux");

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && composeWithDevTools(applyMiddleware(logger))
);
