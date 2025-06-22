import { useTheme } from '../contexts/ThemeContext';

/**
 * Συστατικό εναλλαγής θέματος (Light/Dark mode)
 */
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label={theme === 'light' ? 'Ενεργοποίηση σκούρου θέματος' : 'Ενεργοποίηση φωτεινού θέματος'}
        >
            <div className="w-6 h-6 relative">
                {/* Sun icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${theme === 'light'
                            ? 'rotate-0 scale-100 opacity-100 text-yellow-500'
                            : 'rotate-90 scale-0 opacity-0 text-gray-400'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>

                {/* Moon icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${theme === 'dark'
                            ? 'rotate-0 scale-100 opacity-100 text-blue-400'
                            : '-rotate-90 scale-0 opacity-0 text-gray-400'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </div>
        </button>
    );
};

export default ThemeToggle;
