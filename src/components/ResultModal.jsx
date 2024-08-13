import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, elapsedTime, onReset }, ref) {

    const dialog = useRef();

    const userLost = elapsedTime >= (2 * targetTime * 1000);
    const formattedelapsedTime = (elapsedTime / 1000).toFixed(2);

    const timeDifference = Math.abs((targetTime * 1000) - elapsedTime);

    const score = Math.round((1 - (timeDifference / (targetTime * 1000))) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog
            ref={dialog}
            className="border-none rounded-lg p-8 bg-[#d7fcf8] animate-[slide-in-from-top_0.35s_ease-out] backdrop:bg-black/90"
        >
            <h2 className="font-handjet font-semibold m-0 mb-1 text-3xl uppercase">
                {userLost && "You Lost!"}
                {!userLost &&
                    <p>Your Score: <strong className="text-[#ff4242]">{score}</strong></p>}
            </h2>
            <p className="my-2 text-lg">
                Target time: <strong className="text-[#10655b]">{targetTime} seconds.</strong>
            </p>
            <p className="my-2 text-lg">
                Elapsed Time: <strong className="text-[#ff4242]">{formattedelapsedTime} seconds.</strong>
            </p>
            <form onSubmit={onReset} method="dialog" className="text-right">
                <button className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
                    Close
                </button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
})

export default ResultModal;