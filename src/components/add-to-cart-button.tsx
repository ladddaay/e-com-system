import { useContext } from "react";
import { CartContext } from "../cart-provider";
import type { ProductType } from "../types/product-type";
import GhostButton from "./ui/ghost-button";

type Props = {
    product: ProductType;
};

function AddToCartButon({ product }: Props) {
    const cartContext = useContext(CartContext);

    const handleOnClick = () => {
        const prevCart = cartContext.cart ?? [];

        const alreadyAddedProduct = prevCart.find((x) => x.id === product.id);

        if (alreadyAddedProduct) {
            const newCart = prevCart.map((x) => {
                if (x.id === alreadyAddedProduct.id) {
                    return {
                        ...x,
                        quantity: x.quantity + 1,
                    };
                }
                return x;
            });

            cartContext.updateCart(newCart);
        } else {
            cartContext.updateCart([
                ...prevCart,
                {
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    price: product.price,
                    quantity: 1,
                },
            ]);
        }
    };

    return (
        <GhostButton onClick={() => handleOnClick()}>Add to cart</GhostButton>
    );
}

export default AddToCartButon;
