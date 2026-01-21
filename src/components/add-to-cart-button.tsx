import useLocalStorage from "../hooks/useLocalstorage";
import type { CartProductType } from "../types/cart-product-type";
import type { ProductType } from "../types/product-type";
import GhostButton from "./ui/ghost-button";

type Props = {
    product: ProductType;
};

function AddToCartButon({ product }: Props) {
    const localStorage = useLocalStorage();

    const handleOnClick = () => {
        const prevCart =
            (localStorage.getItem("cart") as CartProductType[]) ?? [];

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

            localStorage.setItem("cart", newCart);
        } else {
            localStorage.setItem("cart", [
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
