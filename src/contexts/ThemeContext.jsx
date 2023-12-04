import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const currentTheme = localStorage.getItem("light");
        return currentTheme ? currentTheme : "light";
    })

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}