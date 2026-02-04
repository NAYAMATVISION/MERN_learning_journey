
import { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { increment, decrement , reset , incrementByAmount } from '../src/features/counter/counterSlice.jsx'
import './App.css'


function App() {
  const [amount , setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); 
  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() { 
    dispatch(decrement());

  }
  function handleResetClick() {
    dispatch(reset());
  }
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p> count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>

      <input 
      type="number"
      value={amount}
      placeholder='Enter amount'
      onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={() => dispatch(incrementByAmount(amount))}>Add Amount</button>
    </div>
  )
}

export default App
