import { X } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../cart-provider";
import Button from "./ui/button";

type Props = {
    setCheckoutDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

function CheckoutDialog({ setCheckoutDialog }: Props) {
    const cartContext = useContext(CartContext);
    const [coopen, setCoopen] = useState<number>();
    const coopenInputRef = useRef(null);

    const totalPrice =
        cartContext.cart?.reduce((acc, x) => x.quantity * x.price + acc, 0) ??
        0;
    const discountedPrice = totalPrice - (coopen ?? 0);

    useEffect(() => {
        if (coopenInputRef.current) {
            coopenInputRef.current.focus();
        }
    }, []);

    return (
        <div className="border border-b-amber-800 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="w-[400px] h-auto py-4 px-4 bg-cyan-700 rounded-2xl ">
                <form className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Checkout</h2>
                        <Button
                            variant="ghost"
                            onClick={() => setCheckoutDialog(false)}
                        >
                            <X />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-2 px-3">
                        <div className="flex gap-1.5 justify-between">
                            <label htmlFor="name">Coopen Code</label>
                            <input
                                ref={coopenInputRef}
                                type="number"
                                id="name"
                                className="border-2 rounded-sm"
                                value={coopen}
                                max={totalPrice}
                                min={0}
                                onChange={(e) => setCoopen(+e.target.value)}
                            />
                        </div>

                        <div>
                            <div>
                                Discounted Price:{" "}
                                {discountedPrice < 0 ? 0 : discountedPrice}{" "}
                                Rupees ( you saved{" "}
                                {(coopen ?? 0 > totalPrice)
                                    ? totalPrice
                                    : coopen}
                                , it was {totalPrice} )
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <Button onClick={() => setCheckoutDialog(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutDialog;
