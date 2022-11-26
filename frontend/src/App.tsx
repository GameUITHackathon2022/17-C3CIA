import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Body />
      <BottomNav />
    </div>
  )
}

export default App
