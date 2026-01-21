import { useContext } from "react";
import { CartContext } from "../cart-provider";
import { ThemeContext } from "../theme-provider";
import type { CartProductType } from "../types/cart-product-type";
import RemoveProductFromCartButton from "./remove-from-cart-button";
import Button from "./ui/button";

type Props = {
    product: CartProductType;
};

function CartProductCard({ product }: Props) {
    const themeContext = useContext(ThemeContext);
    const cartContext = useContext(CartContext);

    const increaseQuontity = (cartProductId: string) => {
        const newCart =
            cartContext.cart?.map((x) => {
                if (x.id == cartProductId) {
                    return {
                        ...x,
                        quantity: x.quantity + 1,
                    };
                }
                return x;
            }) ?? [];
        cartContext.updateCart(newCart);
    };

    const decreaseQuontity = (cartProductId: string) => {
        if (
            cartContext.cart?.find((x) => x.id === cartProductId)?.quantity ===
            1
        ) {
            const newCart =
                cartContext.cart?.filter((x) => !(x.id === cartProductId)) ??
                [];
            cartContext.updateCart(newCart);
        } else {
            const newCart =
                cartContext.cart?.map((x) => {
                    if (x.id == cartProductId) {
                        return {
                            ...x,
                            quantity: x.quantity - 1,
                        };
                    }
                    return x;
                }) ?? [];
            cartContext.updateCart(newCart);
        }
    };

    return (
        <div
            key={product.id}
            className="border rounded-2xl px-4 py-2 w-full  md:w-[250px] flex flex-col gap-1"
        >
            <div
                className={`${themeContext.theme === "dark" ? "text-orange-800" : "text-amber-100"}`}
            >
                {product.title}
            </div>
            <div>{product.price * product.quantity} Rupees total</div>
            {product.quantity > 1 && <div>{product.price} Rupees each</div>}
            <div className="flex justify-between text-sm">
                <span>Category:</span>
                <span>{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>Quontity:</span>
                <span>
                    <span className="border">
                        <Button
                            variant="ghost"
                            onClick={() => increaseQuontity(product.id)}
                        >
                            +
                        </Button>
                    </span>
                    <span className="px-3">{product.quantity}</span>
                    <span className="border">
                        <Button
                            variant="ghost"
                            onClick={() => decreaseQuontity(product.id)}
                        >
                            -
                        </Button>
                    </span>
                </span>
            </div>
            <div>
                {product.price > 5000 && (
                    <div className="text-yellow-600">Primium Product</div>
                )}
            </div>

            <div className="text-center">
                <RemoveProductFromCartButton productId={product.id} />
            </div>
        </div>
    );
}

export default CartProductCard;
