import React from 'react';
import ReactDOM from 'react-dom';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className='' >
            {label}
        </button>
        );
    }

export default Button;