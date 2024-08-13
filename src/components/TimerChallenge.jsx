import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime, onResult }) {
    const timer = useRef();
    const dialog = useRef();

    const [elapsedTime, setElapsedTime] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [score, setScore] = useState(null);
    const timerIsActive = elapsedTime > 0 && elapsedTime < 2 * targetTime * 1000;

    // Function to calculate the score
    function calculateScore(targetTime, elapsedTime) {
        const timeDifference = Math.abs(targetTime * 1000 - elapsedTime);
        return Math.round((1 - timeDifference / (targetTime * 1000)) * 100);
    }

    // Effect to handle completion logic
    useEffect(() => {
        if (elapsedTime >= 2 * targetTime * 1000 && !isCompleted) {
            clearInterval(timer.current);
            dialog.current.open();

            const calculatedScore = calculateScore(targetTime, elapsedTime);
            setScore(calculatedScore);
            onResult(title, calculatedScore);
            setIsCompleted(true);
        }
    }, [elapsedTime, isCompleted, targetTime, onResult, title]);

    function handleStart() {
        timer.current = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();

        const calculatedScore = calculateScore(targetTime, elapsedTime);
        setScore(calculatedScore);
        onResult(title, calculatedScore);
        setIsCompleted(true);
    }

    function handleReset() {
        setElapsedTime(0);
    }

    let timerAnimation = '';
    let timerText = "Timer inactive";
    if (timerIsActive) {
        timerAnimation = 'animate-flash';
        timerText = "Timer is running...";
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                elapsedTime={elapsedTime}
                targetTime={targetTime}
                onReset={handleReset} />
            <section className="flex flex-col items-center justify-center p-8 my-8 mx-auto w-3/4 sm:w-3/4 lg:w-full
                        bg-gradient-to-r from-gray-400 to-gray-300 text-gray-700
                        dark:bg-gradient-to-r dark:from-neutral-800 dark:via-neutral-850 dark:to-neutral-950 dark:text-gray-100
                        rounded-md">
                <h2 className="font-quicksand font-bold text-2xl tracking-wide m-0 text-center uppercase text-[#221c18] dark:text-neutral-200">
                    {title}
                </h2>
                <p className="font-handjet text-2xl border border-[#ff4242] rounded-md p-1 m-2 ">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                {!isCompleted ? (
                    <>
                        <button
                            onClick={timerIsActive ? handleStop : handleStart}
                            className="my-4 px-4 py-2 border-none rounded-md 
                            bg-red-600 text-gray-100
                            dark:bg-green-900 dark:text-gray-100 
                            text-lg cursor-pointer 
                            hover:bg-red-900
                            dark:hover:bg-green-950">
                            {timerIsActive ? "End Challenge" : "Start Challenge"}
                        </button>
                        <p className={timerAnimation}>
                            {timerText}
                        </p>
                    </>
                ) : (
                    <p className="font-handjet font-semibold text-4xl">
                        {score !== null ? `Score: ${score}` : 'Calculating score...'}
                    </p>
                )}
            </section>
        </>
    )
}
