import { X } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart-provider";
import Button from "./ui/button";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ isOpen, setIsOpen }: Props) {
    const cartContext = useContext(CartContext);

    return (
        <div
            className={`border border-orange-600 h-screen w-[170px] z-10 fixed top-0 ${isOpen ? "left-0" : "-left-[170px]"} lg:w-[250px] lg:fixed lg:top-0 lg:left-0 flex flex-col bg-[#242424]`}
        >
            <div className="ml-auto lg:hidden">
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                    <X className="h-8 w-8" />
                </Button>
            </div>
            <nav className="w-full my-10 flex flex-col gap-3 px-3 py-2">
                <div className="w-full">
                    <Link to="/dashboard" className="py-1 ">
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Link to="/product-catelog" className="py-1 ">
                        Product Catalog
                    </Link>
                </div>
                <div>
                    <Link to="/cart-page" className="py-1 ">
                        Cart Page (
                        <span>
                            {cartContext.cart?.reduce(
                                (acc, x) => x.quantity + acc,
                                0,
                            )}
                        </span>{" "}
                        total items)
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
