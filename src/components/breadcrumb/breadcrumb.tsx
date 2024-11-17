import React from 'react';
import './breadcrumb.css';
import './arrow.svg';

interface BreadcrumbProps {
    items: {
        label: string;
        path: string;
    }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
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

export default Breadcrumb;