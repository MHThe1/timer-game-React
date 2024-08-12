import useLocalStorage from 'use-local-storage';

import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

export default function ToggleTheme() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setDarkMode] = useLocalStorage("isDark", preference);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <button
            onClick={toggleDarkMode}
            className="justify-self-end w-8 h-8 rounded-full flex items-center justify-center"
        >
            {darkMode ? (
                <SunIcon color="white" />
            ) : (
                <MoonIcon />
            )}
        </button>
    )
}

export const ThemeMode = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode] = useLocalStorage("isDark", preference);
    return darkMode;
};