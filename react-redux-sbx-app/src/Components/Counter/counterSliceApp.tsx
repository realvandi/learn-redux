import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
import store, { RootState } from "./counterSliceStore";

function CounterSliceApp() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter);

  return (
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          Increment Async by 5
        </button>
        <p>{count}</p>
      </div>
  );
}

export default CounterSliceApp;
