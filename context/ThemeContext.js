import { createContext, useEffect } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorageState('dark', true);

  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
