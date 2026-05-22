interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary" | "outline";
    type?: "button" | "submit";
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    variant = "primary",
    type = "button", 
    isLoading = false, 
    className = "",
    onClick,
}) => {
    const baseStyle = "px-10 py-3 rounded font-medium transition-all duration-200";
    const variantStyle = 
        variant === "primary"
        ? "bg-white border border-black text-black shadow-lg"
        : "border border-black text-black hover:bg-grey-100 shadow-lg";

    return (
        <button 
            type={type} 
            className={`${baseStyle} ${variantStyle} ${className}`}
            onClick={onClick}
            disabled={isLoading} 
        >
            {isLoading ? "Loading..." : label} 
        </button>
    );
};