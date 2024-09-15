import React from 'react';
import ReactDOM from 'react-dom';

interface FetchProps {  
    template?: string;  
    value: string; 
    onValueChange: React.Dispatch<React.SetStateAction<any>>;
    type?: string; 
  }

const Input : React.FC<FetchProps>  = (
    {
        template,
        value,
        onValueChange,
        type
    }
) => {

    return (
        <div>
            <input 
                value={value}
                type={type} 
                onChange={(event) => onValueChange(event.target.value)} 
            />
        </div>
    )

}

export default Input;