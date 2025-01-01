import React, { useMemo } from 'react';
import '../../styles/tailwind.css';
import { FlexProps, OptionTemplate } from './interfaces/IContainer';

/**
 * Flex component to create a flexible container with various layout options.
 *
 * @param props - The properties for the Flex component.
 * @returns {JSX.Element} The rendered Flex container.
 */
const Flex = React.memo(({ children, template, width ,...props }: FlexProps): JSX.Element => {    
    if (template && !Object.values<OptionTemplate>(OptionTemplate).includes(template)) {
        throw new Error(`Template "${template}" is not a valid option.`);
    }

    return (
        <div
            style={{ width: width ? `${width}%` : 'auto' }}         
            id='flex'
            {...props}
            className={`flex ${template ? `flex-${template}` : ''}`}
        >            
            {useMemo(() => React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child) : child), [children])}
        </div>
    );
});

export default Flex;