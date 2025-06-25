import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkList from './components/WorkList'

const WORKS = [
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
  { title: "Мона Лиза", age: "1495–1498", src: "./public/img/Mona_Lisa.jpg" },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Leonardo da vinche</h1>
      <hr />

      <div className="container">
        <img src="./public/img/1612943636_vinci.jpg" alt="Leonardo da Vinci" />
        <p>Леона́рдо ди сер Пье́ро да Ви́нчи (итал. Leonardo di ser Piero da Vinci[1]; 15 апреля 1452, селение Анкиано, около городка Винчи, близ Флоренции — 2 мая 1519, замок Кло-Люсе, близ Амбуаза, Турень, Франция) — итальянский художник (живописец, скульптор, архитектор) и учёный (анатом, естествоиспытатель), изобретатель, писатель, музыкант, один из крупнейших представителей искусства Высокого Возрождения, яркий пример «универсального человека» (лат. homo universalis). </p>
      </div>

      <hr />
      <h2>Works</h2>

      <WorkList works={WORKS} />

    </>
  )
}

export default App
