import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalstorage";

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const localStorage = useLocalStorage();
    const [theme, setTheme] = useState(
        (localStorage.getItem("theme") as string) ??
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"),
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
