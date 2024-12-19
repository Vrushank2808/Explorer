import Test1 from "./components/Test1"
import Test2 from "./components/Test2"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  let [count, setCount] = useState(0)
  let [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    console.log(count)
    console.log(`You clicked ${count} times`);

    return () => {
      console.log(`You clicked ${count} times`);
    }
  }, [count])

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {isVisible ? <Test1 /> : <Test2 />}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </>
  )
}

export default App

