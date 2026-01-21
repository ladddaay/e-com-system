import { Menu } from "lucide-react";
import GhostButton from "./ui/ghost-button";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import ThemeToggle from "./theme-toggle";

type Props = {
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setIsNavOpen }: Props) {
    const themeContext = useContext(ThemeContext);

    return (
        <div className="border border-pink-500 px-5 h-[50px] flex items-center fixed top-0 w-full bg-[#242424]">
            <GhostButton
                onClick={() => setIsNavOpen(true)}
                className="lg:hidden"
            >
                <Menu />
            </GhostButton>

            <div className="flex items-center justify-between w-full">
                <div>
                    <h1
                        className={`${themeContext.theme === "dark" ? "text-orange-800" : "text-amber-100"} font-bold text-2xl`}
                    >
                        Swift Shop
                    </h1>
                </div>

                <div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

export default Header;
