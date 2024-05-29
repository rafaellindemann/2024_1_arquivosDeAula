import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <h2>Login</h2>

      <div className="inputs">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>

      <Button variant="contained">Login</Button>

    </div>
  )
}

export default App
