import React, { useContext } from 'react'
import { ThemeProvider, useGlobalContext } from './context/ThemContext'

function App() {
  const {isDarkMode,toggleTheme} = useGlobalContext()
  return (
    <div>
      <ThemeProvider>
      <div
        className="app"
        style={{
          backgroundColor: isDarkMode
            ? 'var(--background-color-dark)'
            : 'var(--background-color-light)',
          color: isDarkMode ? 'var(--text-color-dark)' : 'var(--text-color-light)',
        }}
      >
        <h1>Dark and Light Mode Example</h1>
        <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
      </div>
      </ThemeProvider>
      
    </div>
  )
}

export default App
