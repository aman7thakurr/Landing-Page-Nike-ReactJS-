import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
