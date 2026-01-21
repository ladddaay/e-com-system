import { useContext, useState } from "react";
import { CartContext } from "../cart-provider";
import CartProductCard from "../components/cart-product-card";
import CleanCartButton from "../components/clean-cart-button";
import Button from "../components/ui/button";
import CheckoutDialog from "../components/checkout-dialog";

function CartPage() {
    const cartContext = useContext(CartContext);
    const [checkoutDialog, setCheckoutDialog] = useState(false);

    return (
        <div className="h-[calc(100vh-50px)]">
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Your Cart</h1>
                    <p className="text-sm">
                        products that you have added to cart
                    </p>
                </div>

                <div className="flex gap-3">
                    <CleanCartButton />
                    {cartContext.cart?.length !== undefined &&
                        cartContext.cart?.length > 0 && (
                            <Button onClick={() => setCheckoutDialog(true)}>
                                Checkout
                            </Button>
                        )}
                </div>
            </div>

            <div className="border border-cyan-400 py-7 px-10 flex flex-col gap-4">
                <div className="flex gap-5">
                    <div>
                        Total Price:{" "}
                        {cartContext.cart?.reduce(
                            (acc, x) => x.quantity * x.price + acc,
                            0,
                        )}{" "}
                        Rupees
                    </div>
                    <div>Total Items: {cartContext.cart?.length}</div>
                </div>
                {cartContext.cart && (
                    <div className="flex flex-wrap gap-5">
                        {cartContext.cart?.map((product) => {
                            return (
                                <CartProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {checkoutDialog && (
                <CheckoutDialog
                    setCheckoutDialog={setCheckoutDialog}
                />
            )}
        </div>
    );
}

export default CartPage;
