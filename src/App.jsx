import './App.css'

import ToggleTheme, { ThemeMode } from './components/ToggleTheme';

function App() {
  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900 ">
        <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">mhthe1</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Dark Mode Implementation with React and Tailwind
          </span>
          <ToggleTheme />
        </nav>
      </main>
    </div>
  )
}

export default App
