import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalstorage";
import type { CartProductType } from "./types/cart-product-type";

const CartContext = createContext<{
    cart: CartProductType[] | null;
    updateCart: (cart: CartProductType[]) => void;
}>({
    cart: null,
    updateCart: (cart: CartProductType[]) => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const localStorage = useLocalStorage();
    const [cart, setCart] = useState(
        localStorage.getItem("cart") as CartProductType[],
    );

    useEffect(() => {
        localStorage.setItem("cart", cart);
    }, [cart]);

    const updateCart = (cart: CartProductType[]) => {
        setCart(cart);
    };

    return (
        <CartContext.Provider value={{ cart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
