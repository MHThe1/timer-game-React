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
        timerText = "Time is running...";
    }

    return (
        <>
        <ResultModal 
            ref={dialog} 
            remainingTime={timeRemaining} 
            targetTime={targetTime}
            onReset={handleReset} />
        <section className="flex flex-col items-center justify-center p-8 my-8 mx-auto bg-[linear-gradient(#4df8df,#4df0f8)] text-[#221c18] shadow-lg shadow-[#23222299] rounded-md">
            <h2 className="text-xl tracking-wide m-0 text-center uppercase text-[#221c18]">
                {title}
            </h2>
            <p className="border border-[#46cebe] rounded-md p-1 m-2 ">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button 
                onClick={timerIsActive ? handleStop : handleStart}
                className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
                {timerIsActive ? "End Challenge" : "Start Challenge"}
            </button>
            <p className={timerAnimation}>
                {timerText}
            </p>
        </section>
        </>
    )
}