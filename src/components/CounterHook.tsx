import { FC } from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterHook: FC = () => {
  const { counter, counterRef, handleClick } = useCounter({
    initialValue: 0,
    maxValue: 10,
  });

  return (
    <div>
      <h2>Counter Hook</h2>
      <h3 ref={counterRef}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
