import { useContext } from "react";
import type { ProductType } from "../types/product-type";
import { ThemeContext } from "../provider";

type Props = {
    product: ProductType;
    setProjecToEdit: React.Dispatch<
        React.SetStateAction<ProductType | undefined>
    >;
    setEditProductDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductCard({
    product,
    setProjecToEdit,
    setEditProductDialog,
}: Props) {
    const themeContext = useContext(ThemeContext);

    return (
        <div
            key={product.id}
            className="border rounded-2xl px-4 py-2 w-[250px]"
        >
            <div className="text-lg font-semibold flex justify-between">
                <span
                    className={`${themeContext.theme === "dark" ? "text-orange-800" : "text-amber-100"}`}
                >
                    {product.name}
                </span>
                <span>{product.price} Rupees</span>
            </div>
            <div className="flex justify-between">
                <span>Category:</span>
                <span>{product.category}</span>
            </div>
            <div className="flex justify-between">
                <span>Stock Quontity:</span>
                <span>{product.stockQuontity}</span>
            </div>
            <div>
                {product.stockQuontity < 5 && (
                    <div className="text-orange-600">Limited Quantity</div>
                )}
            </div>
            <div>
                {product.price > 5000 && (
                    <div className="text-yellow-600">Primium Product</div>
                )}
            </div>
            <div>
                {product.stockQuontity === 0 && (
                    <div className="text-red-600">Out of Stock</div>
                )}
            </div>
            <div>
                <button
                    type="button"
                    className="border py-0.5 px-2 hover:cursor-pointer"
                    onClick={() => {
                        setProjecToEdit(product);
                        setEditProductDialog(true);
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
