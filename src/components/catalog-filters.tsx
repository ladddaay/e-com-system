import Pulldown from "./dropdown-category-selector";

type Props = {
    searchString: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    filterProductCategory: string | undefined;
    setFilterProductCategory: React.Dispatch<React.SetStateAction<string>>;
};

function CatalogFilters({
    searchString,
    setSearchString,
    filterProductCategory,
    setFilterProductCategory,
}: Props) {
    return (
        <div className="  flex flex-col gap-3 lg:flex-row lg:justify-between">
            <div>
                <input
                    type="text"
                    placeholder="Search with product name"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    className="border rounded-lg py-1 px-3 w-[300px]"
                />
            </div>

            <div className="flex items-center gap-3">
                <span>Filter Category:</span>
                <Pulldown
                    filterCategory={filterProductCategory}
                    setFilterCategory={setFilterProductCategory}
                />
            </div>
        </div>
    );
}

export default CatalogFilters;
