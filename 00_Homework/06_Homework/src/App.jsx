import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import EagleOrTail from './components/EagleOrTail'

function App() {
  return (
    <>
      <TodoList />

      <EagleOrTail />
    </>
  )
}

export default App
