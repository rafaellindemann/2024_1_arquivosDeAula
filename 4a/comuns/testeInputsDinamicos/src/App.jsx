import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeForm from './components/RecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeForm />
    </>
  )
}

export default App
