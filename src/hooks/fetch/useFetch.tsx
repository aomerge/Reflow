import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchOptions {
  method?: HTTPMethod;
  headers?: HeadersInit;
  body?: any;
}

const useFetch = <T,>(
  url: string,
  options?: FetchOptions
): FetchState<T> => {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true); 
      try {

        const response = await fetch(url, {
          method: options?.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
          },
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
          throw new Error(`Error HTTP! estado: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        let result: T;

        if (contentType && contentType.indexOf('application/json') !== -1) {
          result = await response.json();
        } else {
          result = (await response.text()) as any;
        }

        setData(result);

      } catch (error) {

        error instanceof Error
          ? setError(error.message)
          : setError(String(error));
          
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};

export default useFetch;
