import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('system');

    const updateTheme = (newTheme) => {
    setTheme(newTheme);
    };

    return (
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };