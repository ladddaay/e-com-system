import { useEffect, useState } from "react";
import CatalogFilters from "../components/catalog-filters";
import ProductCard from "../components/product-card";
import { useGetProducts } from "../hooks/useGetProducst";

function ProductCatelogPage() {
    const [filterCategory, setFilterCategory] = useState<string>("All");
    const [searchString, setSearchString] = useState<string>("");

    const {
        data: products,
        isLoading,
        error,
    } = useGetProducts(filterCategory, searchString);

    useEffect(() => {
        setSearchString("");
    }, [filterCategory]);

    return (
        <div className="h-[calc(100vh-50px)]">
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Product Catalog</h1>
                    <p className="text-sm">List of all products</p>
                </div>
            </div>

            <div className="border border-cyan-400 py-15 px-10 flex flex-col gap-4">
                <CatalogFilters
                    searchString={searchString}
                    setSearchString={setSearchString}
                    filterProductCategory={filterCategory}
                    setFilterProductCategory={setFilterCategory}
                />

                {!isLoading && error && <div>{error}</div>}

                {!isLoading && !products && !error && <div>No Products</div>}

                {isLoading && <div>loading...</div>}

                {!isLoading && products && (
                    <div className="flex flex-wrap gap-5">
                        {products?.map((product) => {
                            if (
                                searchString &&
                                !product.title
                                    .toLocaleLowerCase()
                                    .includes(
                                        searchString.toLocaleLowerCase().trim(),
                                    )
                            ) {
                                return;
                            }

                            if (
                                filterCategory &&
                                filterCategory !== "All" &&
                                product.category !== filterCategory
                            ) {
                                return;
                            }

                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCatelogPage;
