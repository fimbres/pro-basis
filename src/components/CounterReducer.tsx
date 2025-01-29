import { FC, useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction = 
  { type: 'increaseBy', payload: { value: number }} |
  { type: 'reset'};

const counterReducer = (state: CounterState, action: CounterAction ): CounterState => {
  switch(action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    default: 
      return state;
  }
};

export const CounterReducer: FC = () => {
  const [counter, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => dispatch({ type: 'reset' });
  const handleIncreaseBy = (value: number) => dispatch({ type: 'increaseBy', payload: { value }})

  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter.counter}</h3>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
