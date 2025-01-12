import { useState ,useRef, useEffect } from 'react';

let globalIdCounter = 0; 

interface UseIdProps {
    template?: string;
    label: string;
}



export const useId = (label?: any, template?: any): string => {  

    let abbreviated = '';
    let labelLength = 0;

    if (label) {
        const letters = label.trim().replace(/\s+/g, '').split('') || [];
        const firstLetter = letters[0]?.toUpperCase() || ''; 
        const lastLetter = letters[letters.length - 1]?.toUpperCase() || ''; 
        const middleLetter = letters.length > 0 
            ? letters[Math.floor(letters.length / 2)].toUpperCase() 
            : ''; 
        labelLength = label.length;
        abbreviated = `${firstLetter}${middleLetter}${lastLetter}`;    
    }

    // Calcula las iniciales del template
    const getTemplateInitials = (template?: string) => {
        if (!template) return '';
        return template
            .split('-')
            .map(part => part.charAt(0).toUpperCase())
            .join('');
    };

    // Genera el ID solo una vez
    const idRef = useRef(() => {        
        const initials = getTemplateInitials(template || '');
        return `${initials}${abbreviated}${initials.length}${labelLength}`;
    });

    useEffect(() => {
        if (template) {
            console.log('useId triggered by template:', template);
        }
    }, [template]);

    return idRef.current();
};

