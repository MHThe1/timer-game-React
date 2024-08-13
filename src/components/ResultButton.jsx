export default function ResultButton({onClick}) {
    return (<button
        onClick={onClick}
        className="fixed font-semibold bottom-24 right-4 p-2 
        bg-neutral-800 text-white rounded-lg shadow-lg hover:bg-blue-700 
        dark:bg-gradient-to-r dark:from-neutral-600 dark:via-neutral-850 dark:to-neutral-950 dark:text-gray-100 dark:hover:bg-blue-900 transition-colors"
      >
        Results
      </button>)
}