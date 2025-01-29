import { useState, useEffect } from 'react';

export const useSession = () => {
  const [sessionData, setSessionData] = useState<{ [key: string]: string }>({});

  const setItem = (name: string, value: string) => {
    try {
      sessionStorage.setItem(name, value);
      setSessionData((prevData) => ({ ...prevData, [name]: value }));
    } catch (error) {
      console.error('Error setting session storage item:', error);
    }
  };

  const getItem = (name: string) => {
    return sessionData[name] || null;
  };

  const deleteItem = (name: string) => {
    try {
      sessionStorage.removeItem(name);
      setSessionData((prevData) => {
        const updatedData = { ...prevData };
        delete updatedData[name];
        return updatedData;
      });
    } catch (error) {
      console.error('Error deleting session storage item:', error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const parsedData = Object.keys(sessionStorage).reduce((acc, key) => {
        acc[key] = sessionStorage.getItem(key) || '';
        return acc;
      }, {} as { [key: string]: string });
      setSessionData(parsedData);
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange(); // Initialize sessionData on mount

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { setItem, getItem, sessionData, deleteItem };
};

export default useSession;



