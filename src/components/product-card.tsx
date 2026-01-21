import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import type { ProductType } from "../types/product-type";
import AddToCartButon from "./add-to-cart-button";

type Props = {
    product: ProductType;
};

function ProductCard({ product }: Props) {
    const themeContext = useContext(ThemeContext);

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
            <div>{product.price} Rupees</div>
            <div className="flex justify-between text-sm">
                <span>Category:</span>
                <span>{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>Stock Quontity:</span>
                <span>{product.stock}</span>
            </div>
            <div>
                {product.stock < 5 && (
                    <div className="text-orange-600">Limited Quantity</div>
                )}
            </div>
            <div>
                {product.price > 5000 && (
                    <div className="text-yellow-600">Primium Product</div>
                )}
            </div>
            <div>
                {product.stock === 0 && (
                    <div className="text-red-600">Out of Stock</div>
                )}
            </div>

            <div className="text-center">
                <AddToCartButon product={product} />
            </div>
        </div>
    );
}

export default ProductCard;
