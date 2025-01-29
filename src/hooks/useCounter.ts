import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

interface UseCounterProps {
  initialValue?: number;
  maxValue?: number;
}

export const useCounter = ({ initialValue = 0, maxValue = 10 }: UseCounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if(counter === maxValue) {
      console.log("%cSe llegó al valor máximo", "color: red; backgrund-color: black;");

      tl.current
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

  const handleClick = () => setCounter(c => c < maxValue ? c + 1 : c);

  return {
    counter,
    counterRef,
    handleClick,
  }
}
