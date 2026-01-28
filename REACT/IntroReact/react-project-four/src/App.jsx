import { useState } from 'react'  
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
     {/* <Card name="John Doe">
      <h1>Best WEB DEV course</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi quidem rerum reprehenderit vitae pariatur enim eum nesciunt reiciendis, cupiditate in, perferendis deleniti dicta quo vero eius atque aut quibusdam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     </Card>
     <Card children="This is children prop" name="Jane Smith">
      <p>HIIIIIIIIIIII!</p>
     </Card> */}
    </div>
  )
}

export default App
