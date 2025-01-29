import { Counter } from "./components/Counter"
import { CounterEffect } from "./components/CounterEffect"
import { CounterHook } from "./components/CounterHook"
import { CounterReducer } from "./components/CounterReducer"

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  )
}

export default App
