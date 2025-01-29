import { FC, useReducer } from 'react';
import { CounterState } from './interfaces/counter.interfaces';
import { counterReducer } from './reducer/counter.reducer';
import { doIncreaseBy, doReset } from './actions/counter.actions';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer: FC = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => dispatch(doReset());
  const handleIncreaseBy = (value: number) => dispatch(doIncreaseBy(value));

  return (
    <div>
      <h2>Counter Reducer</h2>
      <h3>{counterState.counter}</h3>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
