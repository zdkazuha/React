import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './component/CardList'


const Products = [
  { id: 1, productDescription: 'Product 1', price: 100, inStock: true, reviews: 5, src: "https://content2.rozetka.com.ua/goods/images/big/195944358.jpg" },
  { id: 2, productDescription: 'Product 2', price: 200, inStock: false, reviews: 3, discount: 5, src: "https://content.rozetka.com.ua/goods/images/big/504604562.jpg" },
  { id: 3, productDescription: 'Product 3', price: 300, inStock: true, reviews: 4, discount: 15, src: "https://content1.rozetka.com.ua/goods/images/big/197841071.jpg" },
  { id: 4, productDescription: 'Product 4', price: 400, inStock: true, reviews: 2, discount: 20, src: "https://content1.rozetka.com.ua/goods/images/big/551331115.jpg" },
  { id: 5, productDescription: 'Product 5', price: 500, inStock: false, reviews: 1, discount: 25, src: "https://content1.rozetka.com.ua/goods/images/big/411099470.jpg" },
]


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CardList list={Products} />
    </>
  )
}

export default App
