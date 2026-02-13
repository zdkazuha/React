import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoviesList from './components/MoviesList'

const MOVIES = [
  { id: 1, src: "./public/img/AAAABajTn6vXbs1Q3964qhAmbx6u-Phq1_F8Ghiawu0v6RuSpGr4_P5ZhC3bb9ZvTnCjQHMbloiGdEuuWXz5jpRRhaw1ZK2n1pmaL2V9M5guTR7r37ttxnSs9-wx9g0mRh-4R5d0.jpg", rating: 2 },
  { id: 2, src: "./public/img/AAAABRym2YZFfsn8FUM73iYmEYGKaHV7TbweVR62bkgY1-95BGRwUq9JSEgjc95-nfSajdnSmv5mXvJUoHGEh7N8dYcLpY9hdrXNDug.jpg", rating: 5 },
  { id: 3, src: "./public/img/AAAABeAkc-4vcV8-C1CWnTmwul2woH9Rl_1UcaWmOASDAgFjG-OLPYuNHWDynqK4ilMX5OSf5TeGc1kGR-_jwpIwKktBHyaZHtxa7bQnH_O4g-cFdF8WfSelhYeoms_WLAukidZR.jpg", rating: 4 },
  { id: 4, src: "./public/img/AAAABcCPdcPzbib79N00ajbBUr-Di8xgbJtVuxFZZVxLKeev8XuipsUfP4757lU4y6G4mHUmRC93PkhtJM-IcUm-vUPwynrqM8IfuuI.jpg", rating: 1 },
  { id: 5, src: "./public/img/AAAABazcKP9LcoyseT3wrX0lIq3vCMoIo9ybVDSIh0TDa8qx-u08V5s_WDt0SPOp0_j_JLpuOfVQGvRC_GN0iP_cBhjfJtmLbe2TboIswzC0ypDe8kIkoL-KNfuwLGAl6WFqBGqd.jpg", rating: 3 },
  { id: 6, src: "./public/img/AAAABbaVHzUcv7dA0WYMxZtiJmVgKdo6SeJ3Qf9i9LXe9M6oYWCGn7ajTU12BG6BcnhO_EfFkds2g8TZ6xlIwXGi2n7tEcIBO_UZxEI.jpg", rating: 4 },
  { id: 7, src: "./public/img/AAAABXLCynjc87PuENRdVVJZ5b3LFQZlV0WlKcIvbueFZ3Iuf5keOiBV3mxK4kn7-2BBMWn1cCay0wKKX3bAbzWHBLdZ10V9if-SnvfEIwQvD4_kET6gPHyVk42W_bLezs-h2v8x.jpg", rating: 5 },
  { id: 8, src: "./public/img/AAAABVwU4BmqGR5hZuE9rgicYv0i8Cez3iVHD51tLwSgMdmXbyTQhVYCmf_tbQKq2MDw41cEbYRTJqOLkLm6d3k4HcFkopeG_db1Wkc.jpg", rating: 3 },
  { id: 9, src: "./public/img/AAAABVz9kPZxvuALupTbvgEJs39NJQZTpsRkw4RbPm85FpTx7DH5c58vW86NaMNmNUTZbpLg3vTxzgIyY9A3VqYAS13HtyUqeoXZhQU.jpg", rating: 2 },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Top Movies</h1>
      
      <MoviesList movies={MOVIES} />
    </>
  )
}

export default App
