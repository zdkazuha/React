import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard />
    </>
  )
}

export default App
