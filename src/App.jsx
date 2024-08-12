import './App.css'
import ToggleTheme, { ThemeMode } from './components/ToggleTheme';

import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="font-quicksand font-smooth-antialiased flex min-h-screen flex-col p-12 bg-neutral-100 dark:bg-neutral-900">
        <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">Timer Challenge</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Let the voices in your head tell you the time!
          </span>
          <ToggleTheme />
        </nav>
        <div className="mx-auto my-8 p-8 bg-[radial-gradient(circle_at_center,_#0b201d,_#021619)] rounded-lg shadow-lg shadow-black/80">
          <Player />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 my-8 mx-auto rounded-md">
            <TimerChallenge title="Basic" targetTime={1} />
            <TimerChallenge title="Easy" targetTime={5} />
            <TimerChallenge title="Rookie" targetTime={10} />
            <TimerChallenge title="Know-How" targetTime={15} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
