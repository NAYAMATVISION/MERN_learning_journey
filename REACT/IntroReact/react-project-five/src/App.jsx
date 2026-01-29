import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  //create , manage , change state 
  //sbhi child mei state ko sync krna hai
  const [name, setName] = useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      {/* <p>I m inside parent Component and value of name is {name}</p> */}
    </div>
  )
}

export default App
