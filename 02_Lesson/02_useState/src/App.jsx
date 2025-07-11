import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useContext } from 'react';
import './App.css'
import ToDoList from './components/ToDoList'
import { CounterContext, CounterContext_2 } from './Contexts/counter.context';

const TASKS = [
  { id: 1, title: 'First task', important: false, complete: false, date: '01.04.2023' },
  { id: 2, title: 'Second task', important: false, complete: false, date: '01.04.2023' },
  { id: 3, title: 'Third task', important: true, complete: true },
  { id: 4, title: 'Fourth task', important: true, complete: false, date: '01.04.2023' },
  { id: 5, title: 'Fifth task', important: false, complete: false },
  { id: 6, title: 'Sixth task', important: true, complete: false },
  { id: 7, title: 'Seventh task', important: true, complete: true },
  { id: 8, title: 'Eighth task', important: false, complete: true }
]


function App() {
  const { value: incomplete } = useContext(CounterContext);
  const { value: important } = useContext(CounterContext_2);

  return (
    <>
      <h1>Hello React</h1>
      <p>Незавершені завдання: {incomplete}</p>
      <p>Важливі завдання: {important}</p>
      <hr />
      <ToDoList tasksList={TASKS} />
    </>
  );
}

export default App;