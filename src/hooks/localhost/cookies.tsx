import { useState, useEffect } from 'react';

export const useCookies = () => {
    const [cookies, setCookies] = useState<{ [key: string]: string }>({});


    const setCookie = (name: string, value: string, days: number, options: {
        secure?: boolean;
        httpOnly?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    } ) => {
        try {
            
            useEffect(() => {
                const date = new Date();
                date.setTime(date.getTime() + (days || 0) * 24 * 60 * 60 * 1000);
                const expires = `expires=${date.toUTCString()}`;
                console.log('name',name)
                let cookieString = `${name}=${value}; ${expires}; path=/;`;

                if (options) {
                    if (options.secure) {
                        cookieString += ' Secure;';
                    }
                    if (options.httpOnly) {
                        cookieString += ' HttpOnly;';
                    }                    
                    if (options.sameSite) {
                        cookieString += ` SameSite=${options.sameSite};`;
                    }
                }

                document.cookie = cookieString;

                if (name && value) {
                    setCookies((prevCookies) => ({ ...prevCookies, [name]: value }));
            }

            }, [name, value, days]);
        } catch (error) {
            console.error('Error setting cookie:', error);
        }
    };

    const deleteCookie = (name: string) => {
        try {
            useEffect(() => {
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
                setCookies((prevCookies) => {
                    const updatedCookies = { ...prevCookies };
                    delete updatedCookies[name];
                    return updatedCookies;
                });
            });
        } catch (error) {
            console.error('Error deleting cookie:', error);
        }
    };
    
    const getCookie = (name: string) => {
        return cookies[name];
    };
    return { setCookie, getCookie, cookies, deleteCookie };
};

export default useCookies;