import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import Button from "./ui/button";

function ThemeToggle() {
    const themeContext = useContext(ThemeContext);

    return (
        <Button
            variant="ghost"
            onClick={() => {
                themeContext.toggleTheme();
            }}
        >
            {themeContext.theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
}

export default ThemeToggle;
