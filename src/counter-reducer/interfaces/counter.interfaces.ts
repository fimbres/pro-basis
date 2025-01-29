export interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

export interface CounterAction { 
  type: 'increaseBy' | 'reset', 
  payload?: { value: number }
};

