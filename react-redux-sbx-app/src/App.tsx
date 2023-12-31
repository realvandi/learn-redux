import { Provider } from "react-redux";
import "./App.css";
import CounterSliceApp from "./Components/Snippet_CounterApp/counterSliceApp";
import counterSliceStore from "./Components/Snippet_CounterApp/counterSliceStore";
import { NextUIProvider } from '@nextui-org/react';

import {
  ArticleApp,
  articleAppStore,
} from "./Components/ArticleApp/ArticleApp";

/* ------------ Change in order to change the app provider store ------------ */
const store = articleAppStore;

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ArticleApp />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
