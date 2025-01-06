import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-full transition-all duration-200 font-medium';
  
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-purple-900',
    outline: 'border-2 border-purple-400 hover:bg-purple-800/30 text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;