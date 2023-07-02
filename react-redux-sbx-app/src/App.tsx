import { Provider } from "react-redux";
import "./App.css";
import CounterSliceApp from "./Components/Counter/counterSliceApp";
import store from "./Components/Counter/counterSliceStore";

function App() {
  return (
    <div className="App-header">
      <Provider store={store}>
        <CounterSliceApp />
      </Provider>
    </div>
  );
}

export default App;
