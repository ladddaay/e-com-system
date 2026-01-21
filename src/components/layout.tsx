import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { ThemeProvider } from "../provider";

function Layout() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

    return (
        <div className=" w-full h-screen flex">
            <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
            <div className="flex-1 border border-amber-300">
                <ThemeProvider>
                    <Header setIsNavOpen={setIsNavOpen} />
                    <Outlet />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Layout;
