import React from 'react';
import ReactDOM from 'react-dom';

import { useFetchData } from './Fetch'

interface SubmitProps {  
    template?: string;      
    Text : string;  
    style: React.CSSProperties;
    submit?: boolean;
  }

const Submit : React.FC<SubmitProps>  = (
    {
        style,
        Text,
        submit        
    }
) => {
    const { reFresh } = useFetchData<any>();    

    return (
        <button onClick={()=>reFresh()} style={style}  className='py-1 px-4  m-2 rounded-md font-bold '>
            {
                Text
            }                                    
        </button>
    )

}

export default Submit;