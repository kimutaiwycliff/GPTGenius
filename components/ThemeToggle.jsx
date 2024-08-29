'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  autumn: 'autumn',
  dracula: 'dracula',
};
const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.dracula);
  const toggleTheme = () => {
    const newTheme = theme === themes.autumn ? themes.dracula : themes.autumn;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === themes.autumn ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="w-4 h-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
