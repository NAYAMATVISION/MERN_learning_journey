import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        < UserCard name = 'Nayamat' desc='1'/>
        < UserCard name = 'Krishie' desc='2'/>
        < UserCard name = 'puiii' desc='3'/>
      </div>
    </>
  )
}

export default App
