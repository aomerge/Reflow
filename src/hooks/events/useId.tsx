import { useState ,useRef, useEffect } from 'react';

let globalIdCounter = 0; 

export const useId = (template?: string): string => {
    // Genera un ID único basado en localStorage
    const [uniqueId, setUniqueId] = useState(() => {
        globalIdCounter += 1;
        return globalIdCounter;
    });
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
        const initials = getTemplateInitials(template);
        return `${initials}${initials.length}${uniqueId}`;
    });

    useEffect(() => {
        if (template) {
            console.log('useId triggered by template:', template);
        }
    }, [template]);

    return idRef.current();
};

