import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { ContextProvider } from "./context/diary";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  );
}

export default App;
