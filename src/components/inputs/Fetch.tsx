import React, { Children, ReactNode, createContext, useState, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/tailwind.css';
import useFetch from '../../hooks/fetch/useFetch';

interface FetchProps<T> { 
    children: ReactElement;
    option: FetchOptions;
    url: string;    
  }

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: HeadersInit;
    body?: any;
}

const Fetch = <T extends unknown>({ url, children, option }: FetchProps<T>): React.JSX.Element => {
    const { data, loading, error } = useFetch<T>(url, option);
  
    return React.cloneElement(children, { data, loading, error });
  };

export default Fetch;