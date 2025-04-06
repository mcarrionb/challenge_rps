import { Route, Routes } from 'react-router-dom'
import './App.css'
import { GamePage } from './pages/GamePage/GamePage'
import { StartPage } from './pages/StartPage/StartPage'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'
import "react-toastify/dist/ReactToastify.css";
import { ToggleButton } from './components/ToggleButton/ToggleButton'
import { SelectorLenguaje } from './components/SelectorLenguaje/SelectorLenguaje'
import './i18n';

function App() {
  return (
    <div className="app-container">
      <div className="theme-toggle-container">
        <ToggleButton />
        <SelectorLenguaje/>
      </div>
      
    
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  )
}

export default App
