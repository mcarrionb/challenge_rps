import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToggleButton } from './components/ToggleButton/ToggleButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToggleButton />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
