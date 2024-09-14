import React from 'react';

function ThemeSwitcher({ toggleTheme, currentTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Switch to {currentTheme === 'blue' ? 'Dark' : 'Blue'} Theme
    </button>
  );
}

export default ThemeSwitcher;