import ToggleTheme from "./ToggleTheme"

export default function Header() {
    return(
        <nav className="grid grid-cols-3 p-8 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">Timer Challenge</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Let the voices in your head guess the timer!
          </span>
          <ToggleTheme />
        </nav>
    )
}