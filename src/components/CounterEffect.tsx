import { FC, useState, useEffect } from 'react'

const MAX_COUNT = 10;

export const CounterEffect: FC = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if(counter === MAX_COUNT) {
      console.log("%cSe llegó al valor máximo", "color: red; backgrund-color: black;");
    }
  }, [counter]);

  const handleClick = () => setCounter(c => c < MAX_COUNT ? c + 1 : c);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
