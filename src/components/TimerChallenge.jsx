import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
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
                remainingTime={timeRemaining}
                targetTime={targetTime}
                onReset={handleReset} />
            <section className="flex flex-col items-center justify-center p-8 my-8 mx-auto
                    bg-gradient-to-r from-green-200 to-green-300 text-gray-700
                    dark:bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-900 dark:text-gray-100
                    rounded-md">
                <h2 className="font-quicksand font-bold text-xl tracking-wide m-0 text-center uppercase text-[#221c18] dark:text-neutral-200">
                    {title}
                </h2>
                <p className="font-handjet border border-[#ff4242] rounded-md p-1 m-2 ">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
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
            </section>
        </>
    )
}