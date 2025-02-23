import React from "react";

interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-200",
  borderColor = "bg-coral-200",
  textColor = "text-white",
  fullWidth = false,
  onClick,
  className,
  ...rest
}) => {
  const buttonClasses = `button-shop-now ${backgroundColor} ${borderColor} ${textColor} ${
    fullWidth ? "w-full" : ""
  } ${className || ""}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
