import { useState } from 'react'
import ChildComponent from './components/ChildComponent'
import './App.css'

function App() {
  
  const [count , setCount] = useState(0);
  
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <div>
        Count : {count}
      </div>
      <button onClick={handleClick}>
        Increment
      </button>
      <br />
      <br />  
      <div>
        <ChildComponent buttonName = "Click Me"
        handleClick = {handleClick}
        />
      </div>
    </div>
  )
}

export default App
