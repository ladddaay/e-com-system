import { useContext } from "react";
import { CartContext } from "../cart-provider";
import Button from "./ui/button";

function CleanCartButton() {
    const cartContext = useContext(CartContext);

    const onClickHandler = () => {
        cartContext.updateCart([]);
    };

    return (
        <Button type="button" onClick={() => onClickHandler()}>
            Clean Cart
        </Button>
    );
}

export default CleanCartButton;
