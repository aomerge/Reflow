import React from 'react';
import { BreadcrumbProps } from '../interface/IBreadcrumb';


export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
                        {index === items.length - 1 ? (
                            item.label
                        ) : [
                            <a href={item.path}>{item.label}</a>                            
                        ]}
                    </li>
                ))}
            </ol>
        </nav>
    );
};