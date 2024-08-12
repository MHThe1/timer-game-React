import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog
            ref={dialog}
            className="border-none rounded-lg p-8 bg-[#d7fcf8] animate-[slide-in-from-top_0.35s_ease-out] backdrop:bg-black/90"
        >
            <h2 className="font-['Handjet'] m-0 mb-1 text-3xl uppercase">
                {userLost && "You Lost!"}
                {!userLost &&
                    <p>Your Score: <strong className="text-[#ff4242]">{score}</strong></p>}
            </h2>
            <p className="my-2 text-lg">
                The target time was <strong className="text-[#10655b]">{targetTime} seconds.</strong>
            </p>
            <p className="my-2 text-lg">
                Time Remaining: <strong className="text-[#ff4242]">{formattedRemainingTime} seconds.</strong>
            </p>
            <form onSubmit={onReset} method="dialog" className="text-right">
                <button className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
                    Close
                </button>
            </form>
        </dialog>
    );
})

export default ResultModal;