import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = ''
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;