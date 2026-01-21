import React, { useState, useRef, useEffect } from "react";
import { useGetProductCategories } from "../hooks/useGetProductCategories";
import { Check } from "lucide-react";

type Props = {
    filterCategory: string | undefined;
    setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
};

function Pulldown({ filterCategory, setFilterCategory }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const { data: categories } = useGetProductCategories();

    const toggleMenu = () => setOpen((prev) => !prev);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="px-4 py-2 border rounded"
                type="button"
            >
                {filterCategory} ▼
            </button>

            {open && (
                <ul
                    className="absolute mt-2 w-48 border rounded shadow bg-blue-900 max-h-[300px] overflow-auto"
                    role="menu"
                >
                    {["All", ...(categories ?? [])]?.map((item, idx) => (
                        <li
                            key={idx}
                            className="px-4 py-2 cursor-pointer flex items-center justify-between"
                            role="menuitem"
                            onClick={() => {
                                setFilterCategory(item);
                                setOpen(false);
                            }}
                        >
                            <span>{item}</span>
                            <span>
                                {filterCategory === item && (
                                    <Check className="w-4 h-4" />
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Pulldown;
