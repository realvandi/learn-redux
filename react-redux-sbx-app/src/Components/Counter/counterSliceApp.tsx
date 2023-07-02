import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
      <span>{count}</span>
    </div>
  );
}

function CounterSliceApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default CounterSliceApp;
