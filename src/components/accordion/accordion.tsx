import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;

// Example usage of Accordion component
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Accordion from './accordion';

// const App: React.FC = () => {
//     return (
//         <div>
//             <Accordion title="Section 1" content="Content for section 1" />
//             <Accordion title="Section 2" content="Content for section 2" />
//             <Accordion title="Section 3" content="Content for section 3" />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));