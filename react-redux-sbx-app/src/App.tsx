import { Provider } from "react-redux";
import "./App.css";
import CounterSliceApp from "./Components/CounterApp/counterSliceApp";
import counterSliceStore from "./Components/CounterApp/counterSliceStore";
import {
  ArticleApp,
  articleAppStore,
} from "./Components/ArticleApp/ArticleApp";

/* ------------ Change in order to change the app provider store ------------ */
const store = articleAppStore;

function App() {
  return (
    <Provider store={store}>
      <ArticleApp />
    </Provider>
  );
}

export default App;
