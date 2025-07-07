import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './Contexts/counter.context.jsx'
import { CounterProvider_2 } from './Contexts/counter.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
  <CounterProvider_2>
    <App />
  </CounterProvider_2>
</CounterProvider>
)
