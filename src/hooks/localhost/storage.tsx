import React, { useState, useEffect } from 'react';

type StorageAction = 'create' | 'update' | 'delete' | 'search';

interface StorageHook<T> {
    value: T | null;    
    performAction: (action: StorageAction, value?: T | Partial<T>) => void;
}

export function useStorage<T>(key: string): StorageHook<T> {
    let initialValue: T;
    const [storedValue, setStoredValue] = useState<T | null | any>(null);    

    useEffect(() => {
        try {            
            const item = window.localStorage.getItem(key);            
            setStoredValue(item ? JSON.parse(item) as T : initialValue);                    
        } catch (error) {
            console.error(error);
        }
    }, [key]);


    const performAction = (action: StorageAction, value?: T | Partial<T>) => {
        try {
            useEffect(() => {
                switch (action) {
                    case 'create':
                        if (value !== undefined) {
                            window.localStorage.setItem(key, JSON.stringify(value));
                            setStoredValue(value as T);
                        }
                        break;
                    case 'update':
                        if (value !== undefined) {
                            const item = window.localStorage.getItem(key);
                            if (item) {                            
                                window.localStorage.setItem(key, JSON.stringify(value));
                                setStoredValue( value as T);                            
                                //const currentValue = window.localStorage.getItem(key);
                                //console.log("14",JSON.parse(currentValue as string));
                            }
                        }
                        break;
                    case 'delete':
                        window.localStorage.removeItem(key);
                        setStoredValue(null);
                        break;                    
                    default:
                        throw new Error('Invalid action');
                }
            }, [key]);
        } catch (error) {
            console.error(error);
        }
    };
    //console.log("storedValue",storedValue);
    return { value: storedValue, performAction };
    
}

// Example usage of the useStorage hook
function ExampleComponent() {
    const { value: storedData, performAction } = useStorage<string>('myKey', );

    const handleCreate = () => {
        performAction('create', 'newValue');
    };

    const handleUpdate = () => {
        performAction('update', 'updatedValue');
    };

    const handleDelete = () => {
        performAction('delete');
    };

    const handleSearch = () => {
        performAction('search');
    };

    return (
        <div>
            <p>Stored Data: {storedData}</p>
            <button onClick={handleCreate}>Create</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}