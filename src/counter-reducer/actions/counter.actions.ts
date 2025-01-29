import { CounterAction } from "../interfaces/counter.interfaces";

export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value }
})
