import React from "react";

type ButtonVariant = "default" | "ghost";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export default function Button({
    variant = "default",
    children,
    className = "",
    ...attributes
}: Props) {
    const baseClasses = "px-4 py-2 hover:cursor-pointer";

    const variantClasses =
        variant === "ghost"
            ? ""
            : "border-2 bg-cyan-700 border-cyan-950 rounded-xl font-semibold";

    return (
        <button
            type="button"
            className={`${baseClasses} ${variantClasses} ${className}`}
            {...attributes}
        >
            {children}
        </button>
    );
}
