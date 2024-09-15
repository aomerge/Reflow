import React from 'react';
import ReactDOM from 'react-dom';

interface FetchProps {     
    setComponent: React.FC<any>;
    type?: string; 
  }

const Input : React.FC<FetchProps>  = (
    {
        setComponent,
        type
    }
) => {

    return (
        <div>
            <input type={type} />
        </div>
    )

}

export default Input;