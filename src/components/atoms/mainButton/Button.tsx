import React from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  type,
  onClick,
  children,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
