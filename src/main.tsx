import { createRoot } from 'react-dom/client'
import './shadcn.css'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'

const root = createRoot(document.getElementById('app')!)
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
