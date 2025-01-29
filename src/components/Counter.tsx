import { FC, useState } from 'react'

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  value: number;
  clicks: number;
}

export const Counter: FC<CounterProps> = ({ initialValue = 0 }) => {
  const [counterState, setCounterState] = useState<CounterState>({
    value: initialValue,
    clicks: 0,
  });

  const handleClick = (val: number) => setCounterState(({ value, clicks }) => ({ value: value + val, clicks: clicks + 1 }));

  return (
    <div>
      <h3>Counter: {counterState.value}</h3>
      <h4>Counter: {counterState.clicks}</h4>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  )
}
