import './App.css'
import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';

import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

import Footer from './components/Footer';

function App() {

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="font-quicksand font-smooth-antialiased flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
        <Header />
        <div className='mb-2'>
          <Player />
        </div>

        <div className="mx-auto my-1 p-8 
                        bg-gray-200 text-black
                        dark:bg-gradient-to-t from-slate-900 to-slate-950 dark:text-neutral-200
                        rounded-lg shadow-lg shadow-black/80">


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2 mx-auto rounded-md">
            <TimerChallenge title="Intro" targetTime={1} />
            <TimerChallenge title="Noob" targetTime={5} />
            <TimerChallenge title="Rookie" targetTime={10} />
            <TimerChallenge title="Know-How" targetTime={15} />
            <TimerChallenge title="Amateur" targetTime={20} />
            <TimerChallenge title="Pro" targetTime={30} />
            <TimerChallenge title="Master" targetTime={60} />
            <TimerChallenge title="Legend" targetTime={120} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
