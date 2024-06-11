import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExemploAPI from './components/ExemploAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExemploAPI />
    </>
  )
}

export default App
