import { useState, useRef } from "react";

export default function Player() {
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState('');

    function handleClick() {
        setEnteredPlayerName(playerName.current.value);
    }
    return (
        <section id="player" className="text-center">
            <h2 className="text-[#54a399] mb-2">Welcome {enteredPlayerName ? enteredPlayerName : "Guest"}</h2>
            <p className="flex justify-center items-center">
                <input 
                    ref={playerName}
                    type="text"
                    onKeyDown={handleClick}
                    className="font-inherit border border-[#54a399] bg-[#192f2b] mr-1 rounded-l-md p-1 text-[#d1f0ec]"
                />
                <button 
                    onClick={handleClick}
                    className="cursor-pointer bg-[#54a399] border border-[#54a399] px-4 py-2 text-[#061e1a] rounded-r-md hover:bg-[#3c8379] hover:border-[#3c8379]">
                    Set Name
                </button>
            </p>
        </section>
    );
}
