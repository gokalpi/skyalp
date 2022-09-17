import useDarkMode from '@/hooks/use-dark-mode';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitcher() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} aria-label='Theme switcher'>
      <MoonIcon className='w-6 h-6 dark:hidden fill-sky-400/20 stroke-sky-500' />
      <SunIcon className='w-6 h-6 hidden dark:inline fill-sky-400/20 stroke-sky-500' />
    </button>
  );
}
