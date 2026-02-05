import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count , setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef()

  function handleIncrement(){
    val.current = val.current+1;
    console.log("Value of val: ",val.current);
    setCount(count + 1);
  } 
  // runs on every render
  useEffect(() => {
      console.log("Main firse render hogya")
  })

  function changeColor(){
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleIncrement}>
        Increment
      </button>
      <br />

      <button onClick={changeColor}>
        Change color of first button
      </button>

      <div>
        Count : {count}
      </div>
    </div>
  )
}

export default App
