import { useState } from "react";
import AddProductDialog from "../components/add-product-dialog";
import CatalogFilters from "../components/catalog-filters";
import EditProductDialog from "../components/eidt-product-dialog";
import ProductCard from "../components/product-card";
import Button from "../components/ui/button";
import type { ProductType } from "../types/product-type";

function ProductCatelogPage() {
  const [addProductDialog, setAddProductDialog] = useState<boolean>(false);
  const [editProductDialog, setEditProductDialog] = useState<boolean>(false);
  const [projectToEdit, setProjecToEdit] = useState<ProductType>();
  const [filterCategory, setFilterCategory] = useState<string>();
  const [searchString, setSearchString] = useState<string>("");
  const products = JSON.parse(
    localStorage.getItem("products") ?? "[]",
  ) as ProductType[];

  return (
    <div className="h-[calc(100vh-50px)]">
      <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
        <div>
          <h1 className="font-bold text-2xl">Product Catalog</h1>
          <p className="text-sm">
            Manage all the products in you catalog from here
          </p>
        </div>

        <div>
          <Button onClick={() => setAddProductDialog(true)}>
            + Add Product
          </Button>
        </div>
      </div>

      <div className="border border-cyan-400 py-15 px-10 flex flex-col gap-4">
        <div className="flex justify-between">
          <CatalogFilters
            searchString={searchString}
            setSearchString={setSearchString}
            productCategories={[...new Set(products.map((x) => x.category))]}
            filterProductCategory={filterCategory}
            setFilterProductCategory={setFilterCategory}
          />
        </div>

        <div className="flex flex-wrap gap-5">
          {products.map((product) => {
            if (
              searchString &&
              !product.name
                .toLocaleLowerCase()
                .includes(searchString.toLocaleLowerCase().trim())
            ) {
              return;
            }

            if (filterCategory && product.category !== filterCategory) {
              return;
            }

            return (
              <ProductCard
                product={product}
                setEditProductDialog={setEditProductDialog}
                setProjecToEdit={setProjecToEdit}
              />
            );
          })}
        </div>
      </div>

      {addProductDialog && (
        <AddProductDialog
          addProductDialog={addProductDialog}
          setAddProductDialog={setAddProductDialog}
        />
      )}

      {editProductDialog && (
        <EditProductDialog
          product={projectToEdit}
          addProductDialog={editProductDialog}
          setAddProductDialog={setEditProductDialog}
        />
      )}
    </div>
  );
}

export default ProductCatelogPage;
