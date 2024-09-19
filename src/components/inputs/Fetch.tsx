import React, { Children, ReactNode, useContext,createContext, useState, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import useFetch from '../../hooks/fetch/useFetch';

interface FetchProps<T> { 
    children: ReactElement;
    option?: FetchOptions;
    url: string;        
  }

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: HeadersInit;
    body?: any;
}

interface FetchContextType<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    reFresh: () => void;    
  }

export const useFetchData = <T,>(): FetchContextType<T> => {
    const context = useContext(FetchContext);
    if (context === undefined) {
      throw new Error('useFetchData must be used within a FetchProvider');
    }
    return context;
};

const FetchContext = createContext<FetchContextType<any> | undefined>(undefined);

const Fetch = <T,>({ url, children, option }: FetchProps<T>): React.JSX.Element => {    

    if (!option) {
        option = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            body: null
        };
    }    

    const { data, loading, error, reFresh } = useFetch<T>(url, option); 
    console.log("data",data);            
    
    return (
      <FetchContext.Provider value={{ data, loading, error, reFresh }}>
        {React.cloneElement(children, { data, loading, error })}
      </FetchContext.Provider>
    );    
  };

export default Fetch;