import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BdController } from './controllers/bd.controller.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BdController />
  </StrictMode>,
)
