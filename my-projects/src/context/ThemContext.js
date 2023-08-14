import React, { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
      };
    
    return (
        <themeContext.Provider value={{ isDarkMode, setDarkMode,toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(themeContext);
}
