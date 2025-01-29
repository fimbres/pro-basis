import { Counter } from "./components/Counter"
import { CounterEffect } from "./components/CounterEffect"

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterEffect />
    </>
  )
}

export default App
