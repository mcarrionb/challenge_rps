import { Route, Routes } from 'react-router-dom'
import './App.css'
import { GamePage } from './pages/GamePage'
import { StartPage } from './pages/StartPage/StartPage'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
    </Routes>
  )
}

export default App
