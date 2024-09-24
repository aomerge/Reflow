import React from 'react';
import '../../styles/tailwind.css';
import { getConfig } from '../../utils/config';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
    console.log(getConfig().color.primary.toString());
    const Primary = getConfig().color.primary.toString();
  return (
    <button className={`px-4 py-1 bg-[${Primary}] text-white rounded-sm ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
