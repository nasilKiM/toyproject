import { useState } from "react";
import { createContext } from "react";
import { MockPost } from "../__mocks__/post";

const initialState = MockPost(20);

export const DiaryContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return <DiaryContext.Provider value={[state, setState]}>{children}</DiaryContext.Provider>;
};
