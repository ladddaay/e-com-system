import { useContext } from "react";
import { ThemeContext } from "../provider";
import GhostButton from "./ui/ghost-button";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
    const themeContext = useContext(ThemeContext);

    return (
        <GhostButton
            onClick={() => {
                themeContext.toggleTheme();
            }}
        >
            {themeContext.theme === "dark" ? <Moon /> : <Sun />}
        </GhostButton>
    );
}

export default ThemeToggle;
