import './App.css';
import Header from './components/Header';
import { ThemeMode } from './components/ToggleTheme';
import TimerChallenge from './components/TimerChallenge';
import Footer from './components/Footer';
import { useState, useRef, useEffect } from 'react';
import ResultButton from './components/ResultButton';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [results, setResults] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const resultsRef = useRef(null);

  const handleResult = (title, score) => {
    setResults(prevResults => [...prevResults, { title, score }]);
  };

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (resultsRef.current) {
        const rect = resultsRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowButton(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const totalScore = results.reduce((total, result) => total + result.score, 0);

  return (
    <div className={ThemeMode() ? "dark" : ""}>
      <main className="font-quicksand font-smooth-antialiased flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2 mx-auto w-full sm:w-3/4 lg: rounded-md">
          <TimerChallenge title="Intro" targetTime={1} onResult={handleResult} />
          <TimerChallenge title="Noob" targetTime={5} onResult={handleResult} />
          <TimerChallenge title="Rookie" targetTime={10} onResult={handleResult} />
          <TimerChallenge title="Know-How" targetTime={15} onResult={handleResult} />
          <TimerChallenge title="Amateur" targetTime={20} onResult={handleResult} />
          <TimerChallenge title="Pro" targetTime={30} onResult={handleResult} />
          <TimerChallenge title="Master" targetTime={45} onResult={handleResult} />
          <TimerChallenge title="Legend" targetTime={60} onResult={handleResult} />
        </div>

        <div
          ref={resultsRef}
          className="items-center text-center p-8 bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 rounded-md"
        >
          <h3 className="font-quicksand text-3xl font-bold mb-4">Final Results</h3>
          <ul className='font-handjet font-bold text-2xl'>
            {results.map((result, index) => (
              <li key={index}>
                {result.title}: <span className='text-red-600 dark:text-green-300'>{result.score}</span>
              </li>
            ))}
            <li className="mt-4 font-bold text-4xl">
              Total Score: <span className='text-red-600 dark:text-green-300'>{totalScore}</span>
            </li>
          </ul>
        </div>

        <Footer />
        <Analytics/>
      </main>

      {showButton && (
        <ResultButton onClick={scrollToResults} />
      )}
    </div>
  );
}

export default App;
