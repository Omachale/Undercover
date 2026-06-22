import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/gloria-hallelujah'
import '@fontsource/special-elite'
import '@fontsource/roboto/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
