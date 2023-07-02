import { Provider } from "react-redux";
import "./App.css";
import CounterSliceApp from "./Components/CounterApp/counterSliceApp";
import counterSliceStore from "./Components/CounterApp/counterSliceStore";
import {
  ArticleApp,
  articleAppStore,
  articleAppStoreWithToolkit,
} from "./Components/ArticleApp/ArticleApp";

/* ------------ Change in order to change the app provider store ------------ */
const store = articleAppStoreWithToolkit;

function App() {
  return (
    <Provider store={store}>
      <ArticleApp />
    </Provider>
  );
}

export default App;
