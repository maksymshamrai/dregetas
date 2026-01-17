import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dregetasLogo from './assets/dregetas.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="corner-logo">
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={dregetasLogo} className="logo dregetas spin" alt="Dregetas logo" />
        </a>
        <h1 className="typewriter">Dregetas</h1>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Dregetas
      </div>
      <div className="site-buttons">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          Vite
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          YouTube
        </a>
</div>

    </>
  )
}

export default App
