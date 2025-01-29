import { Counter } from "./components/Counter"
import { CounterEffect } from "./components/CounterEffect"
import { CounterHook } from "./components/CounterHook"

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterEffect />
      <CounterHook />
    </>
  )
}

export default App
