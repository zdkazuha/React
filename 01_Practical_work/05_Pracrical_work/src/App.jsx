import { useState } from 'react'
import ReviewList from "./components/ReviewList";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const reviews = [
    {
      id: 1,
      username: "Anna23",
      rating: 5,
      comment: "Very satisfied with the purchase.",
      advantages: "Fast delivery, good packaging",
      disadvantages: "None so far",
      date: "2025-06-15"
    },
    {
      id: 2,
      username: "Mike_R",
      rating: 4,
      comment: "Great value for the price.",
      advantages: "Affordable price, solid build",
      disadvantages: "Lacks some features",
      date: "2025-06-14"
    },
    {
      id: 3,
      username: "ElenaK",
      rating: 3,
      comment: "Looks good but drains battery fast.",
      advantages: "Nice design",
      disadvantages: "Battery drains quickly",
      date: "2025-06-13"
    },
    {
      id: 4,
      username: "TechGuy88",
      rating: 2,
      comment: "Not suitable for heavy use.",
      advantages: "Good display",
      disadvantages: "Poor performance under load",
      date: "2025-06-12"
    },
    {
      id: 5,
      username: "NatureLover",
      rating: 5,
      comment: "Love the eco-conscious approach!",
      advantages: "Eco-friendly materials",
      disadvantages: "Limited color options",
      date: "2025-06-11"
    },
    {
      id: 6,
      username: "SashaM",
      rating: 4,
      comment: "Light and simple to use.",
      advantages: "Easy to use, lightweight",
      disadvantages: "Plastic feels cheap",
      date: "2025-06-10"
    },
    {
      id: 7,
      username: "Victor89",
      rating: 1,
      comment: "Disappointed. Will return it.",
      advantages: "None",
      disadvantages: "Item arrived broken",
      date: "2025-06-09"
    },
    {
      id: 8,
      username: "KaterinaL",
      rating: 5,
      comment: "Quick setup, works perfectly!",
      advantages: "Excellent quality, fast setup",
      disadvantages: "Slightly expensive",
      date: "2025-06-08"
    },
    {
      id: 9,
      username: "Denys_P",
      rating: 3,
      comment: "Gets the job done, nothing more.",
      advantages: "Does the job",
      disadvantages: "Noisy operation",
      date: "2025-06-07"
    },
    {
      id: 10,
      username: "IraSmile",
      rating: 4,
      comment: "Support was helpful, product OK.",
      advantages: "Good customer support",
      disadvantages: "Long shipping time",
      date: "2025-06-06"
    }
  ];
  
  

  return (
    <>
      <h2>Product Reviews</h2>
      <ReviewList list={reviews} />
    </>
  )
}

export default App