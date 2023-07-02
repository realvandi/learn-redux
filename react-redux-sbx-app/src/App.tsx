import { Provider } from "react-redux";
import "./App.css";
import CounterSliceApp from "./Components/CounterApp/counterSliceApp";
import counterSliceStore from "./Components/CounterApp/counterSliceStore";

/* ------------ Change in order to change the app provider store ------------ */
const store = counterSliceStore;

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
