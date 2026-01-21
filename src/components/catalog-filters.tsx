import Pulldown from "./dropdown-category-selector";

type Props = {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  productCategories: string[];
  filterProductCategory: string | undefined;
  setFilterProductCategory: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
};

function CatalogFilters({
  searchString,
  setSearchString,
  productCategories,
  filterProductCategory,
  setFilterProductCategory,
}: Props) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search with product name"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="border rounded-lg py-1 px-3 w-[300px]"
        />
      </div>
      <div>
        Filter Category:
        <Pulldown
          items={productCategories}
          filterCategory={filterProductCategory}
          setFilterCategory={setFilterProductCategory}
        />
      </div>
    </>
  );
}

export default CatalogFilters;
