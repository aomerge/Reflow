import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';

interface ButtonProps {
  label: string;
  type: String;
}

const Text: React.FC<ButtonProps> = ({ label, type }) => {
    return (
        <text className="bg-slate-500 text-white py-2 px-4 m-2  rounded-sm hover:bg-blue-700">
            {label}
        </text>
        );
    }

export default Text;