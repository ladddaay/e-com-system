import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { ThemeProvider } from "../theme-provider";
import { CartProvider } from "../cart-provider";

function Layout() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <div className=" w-full h-screen flex">
            <CartProvider>
                <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
                <div className={`flex-1 lg:ml-[250px]`}>
                    <ThemeProvider>
                        <Header setIsNavOpen={setIsNavOpen} />
                        <div className="mt-[50px]">
                            <Outlet />
                        </div>
                    </ThemeProvider>
                </div>
            </CartProvider>
        </div>
    );
}

export default Layout;
