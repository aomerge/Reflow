import React from 'react';
import themesConfig from "../templates/themesConfig";

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        margin: '16px auto'
    }
};

interface SubNavigatorProps {
    children: React.ReactNode;
    template?: string;
}

const SubNavigator: React.FC<SubNavigatorProps> = ({ children, template, ...props }) => {
    return (
        <>
            {React.Children.map(children, (child: any) => 
                React.cloneElement(child, { 
                    className: ` sub-navigator-item ${template ? `sub-navigator-item-${template}` : ''}`
                })
            )}
        </>    
    );
};

export default SubNavigator;