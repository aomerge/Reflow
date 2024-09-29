import React from 'react';
import '../../styles/tailwind.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  element?: React.ReactElement;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
    
    
  return (
    <>
      <button className={`px-4 py-1 bg-primary text-black rounded-sm ${className}`} {...props}>
        {label}
      </button>
    </>
  );
};

export default Button;
