import { useContext } from "react";
import { CartContext } from "../cart-provider";

type Props = {
    productId: string;
};

function RemoveProductFromCartButton({ productId }: Props) {
    const cartContext = useContext(CartContext);

    const onClickHandler = () => {
        const newCart =
            cartContext.cart?.filter((x) => !(x.id === productId)) ?? [];
        cartContext.updateCart(newCart);
    };

    return (
        <button type="button" onClick={() => onClickHandler()}>
            Remove
        </button>
    );
}

export default RemoveProductFromCartButton;
