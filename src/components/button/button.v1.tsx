import React from 'react';
import '../../styles/tailwind.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
    
    
  return (
    <>
      <button className={`px-4 py-1 bg-primary text-secondary rounded-sm ${className}`} {...props}>
        {label}
      </button>
    </>
  );
};

export default Button;
