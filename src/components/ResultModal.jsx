import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    return (
      <dialog
        ref={ref}
        className="border-none rounded-lg p-8 bg-[#d7fcf8] animate-[slide-in-from-top_0.35s_ease-out] backdrop:bg-black/90"
      >
        <h2 className="font-['Handjet'] m-0 mb-1 text-3xl uppercase">
          You {result}
        </h2>
        <p className="my-2 text-lg">
          The target time was <strong className="text-[#10655b]">{targetTime} seconds.</strong>
        </p>
        <form method="dialog" className="text-right">
          <button className="mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]">
            Close
          </button>
        </form>
      </dialog>
    );
  })
  
  export default ResultModal;