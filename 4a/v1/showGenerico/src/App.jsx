import { useState } from 'react'

import './App.css'
import Home from './components/Home'

function App() {
  const [main, setMain] = useState(<Home />)

  return (
    <>
      {main}
    </>
  )
}

export default App
