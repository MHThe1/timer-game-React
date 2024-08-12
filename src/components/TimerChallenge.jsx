import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current );
    }

    let timerAnimation = '';
    let timerText = "Timer inactive";
    if (timerStarted) {
        timerAnimation = 'animate-flash';
        timerText = "Time is running...";
    }

    return (
        <>
        <ResultModal ref={dialog} result={"Lost!"} targetTime={targetTime} />
        <section className="flex flex-col items-center justify-center p-8 my-8 mx-auto bg-[linear-gradient(#4df8df,#4df0f8)] text-[#221c18] shadow-lg shadow-[#23222299] rounded-md">
            <h2 className="text-xl tracking-wide m-0 text-center uppercase text-[#221c18]">
                {title}
            </h2>
            {timerExpired && <p>You Lost</p>}
            <p className="border border-[#46cebe] rounded-md p-1 m-2 ">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button 
                onClick={timerStarted ? handleStop : handleStart}
                className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
                {timerStarted ? "End Challenge" : "Start Challenge"}
            </button>
            <p className={timerAnimation}>
                {timerText}
            </p>
        </section>
        </>
    )
}