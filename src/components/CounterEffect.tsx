import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect: FC = () => {
  const [counter, setCounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(counter === MAX_COUNT) {
      console.log("%cSe llegó al valor máximo", "color: red; backgrund-color: black;");

      const tl = gsap.timeline();
      tl
        .to(counterRef.current, {
          y: -5,
          ease: 'ease.out',
          color: 'red'
        })
        .to(counterRef.current, {
          y: 5,
          ease: "bounce.out",
          color: 'white'
        });
    }
  }, [counter]);

  const handleClick = () => setCounter(c => c < MAX_COUNT ? c + 1 : c);

  return (
    <div>
      <h2>Counter</h2>
      <h3 ref={counterRef}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
