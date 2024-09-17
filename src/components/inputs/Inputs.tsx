import React from 'react';
import ReactDOM from 'react-dom';
import { useFetchData } from './Fetch'
import '../../styles/tailwind.css';

interface FetchProps {  
    template?: string;  
    value: string | number; 
    eventKey?: string;
    onValueChange: React.Dispatch<React.SetStateAction<any>>;
    type?: string; 
    style?: React.CSSProperties;
  }

const Input : React.FC<FetchProps>  = (
    {
        template,
        value,
        onValueChange,
        eventKey,
        type,
        style
    }
) => {
    const { reFresh } = useFetchData<any>();  

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        eventKey && event.key === eventKey && reFresh();        
    }

    return (
        <div style={style}  className='overflow-hidden border m-2 rounded-md font-bold shadow'>                    
            <input
                onKeyDown={onKeyDown}
                className=' w-full h-full px-2'                
                value={value}
                type={type} 
                onChange={(event) => onValueChange(event.target.value)} 
            />
        </div>
    )

}

export default Input;