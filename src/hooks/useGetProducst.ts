import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/product-type";

export function useGetProducts(category?: string, searchString?: string) {
    const [data, setData] = useState<ProductType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                if (searchString) {
                    const res = await axios.get(
                        `https://dummyjson.com/products/search?q=${searchString.trim()}`,
                    );
                    setData(res.data.products);
                } else if (category && category != "All") {
                    const res = await axios.get(
                        `https://dummyjson.com/products/category/${category}`,
                    );
                    setData(res.data.products);
                } else {
                    const res = await axios.get(
                        "https://dummyjson.com/products",
                    );
                    setData(res.data.products);
                }
            } catch (error) {
                setError("error fetching data");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [category, searchString]);

    return { data, isLoading, error };
}
