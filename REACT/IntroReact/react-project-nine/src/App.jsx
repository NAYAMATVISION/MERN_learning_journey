import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total , setTotal] = useState(1);
  // useEffect(() => {
    //first -> side effect logic or functionality
    // return () => {
      // second -> cleanup logic ex -> removing event listeners, cancelling subscriptions
  //   }
  // }, [third])
  
  //third = comma seperated list of dependencies we mention entities here whatever we mention here and if it changes react will re execute the first function
 
  // variations of useEffect
  // 1. runs on every render
  // useEffect(() => {
  //   alert('useEffect - every render');
  // })
  

  //2. runs on only firs render
  // useEffect(() => {
  //   alert('useEffect - first render only');
  // }, [])



  //3. run s when specific state/props change
  // useEffect(() => {
  //   alert(`useEffect - count changed to ${count}`);
  // }, [count]) // run when count is updated



  //4. multiple dependencies
  // useEffect(() => {
  //   alert("I will when count and total changes");
  // }, [count, total]) // run when count or total is updated

  //5. lets add a cleanup function
  // useEffect(() => {
  //    alert("count is updated in UI")
  //   return () => {
  //     alert("count is unmountedfrom UI")
  //   }
  // }, [count])

  function handleClick() {
    setCount(count + 1);
    setTotal(total + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>
        Count: {count}
        </button>
        <br />
        <button onClick={handleClick}>
          Total: {total}
        </button>
    </div>
  )
}

export default App
