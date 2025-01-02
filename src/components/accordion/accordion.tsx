import React, { useState, useMemo } from 'react';
import { AccordionProps } from './componentes/interface/Iaccordion';
import './style.css';
import { nanoid } from 'nanoid';
import { Static, Custom  } from './componentes/componentes';

const Accordion: React.FC<AccordionProps> = ({ title, content, template, className ,...props }) => {
    const [isOpen, setIsOpen ] = useState(false);
    const [action, direction ] = useMemo(() => template?.split('-') || [null, null, null], [template]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const renderContent = useMemo(() => {
        switch (action) {
          case 'custom':
            return <Custom title={title}>{props.children}</Custom>;

          default:
            return <Static title={title} content={content} />;
        }
      }, [action, content, props.children, title]);

    return (
        <div id={`accordion-${nanoid(6)}`} className={`accordion accordion-${direction} ${className}`}>
            {renderContent}
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