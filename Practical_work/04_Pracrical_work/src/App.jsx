import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WorkList from './components/WorkList'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import Home from './components/Home'
import Biography from './components/Biography'
import BestWork from './components/BestWork'

const WORKS = [
  { id: 1, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 2, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 3, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 4, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 5, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 6, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
  { id: 7, title: "Мона Лиза", age: "1503–1506", src: "./public/img/Mona_Lisa.jpg" },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="biography" element={<Biography />} />
            <Route path="best work" element={<BestWork />} />
            <Route path="works" element={<WorkList works={WORKS} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
