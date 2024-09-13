import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    
    return (
        <button className="bg-slate-500 text-white py-2 px-4 m-2  rounded-sm hover:bg-blue-700">
            {label}
        </button>
        );
    }

export default Button;