import axios from "axios";
import { useEffect, useState } from "react";

export function useGetProductCategories() {
    const [data, setData] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(
                    "https://dummyjson.com/products/category-list",
                );
                setData(res.data as string[]);
            } catch (error) {
                setError("error fetching data");
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { data, isLoading, error };
}
