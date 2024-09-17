import React, { useState, useEffect } from 'react';

interface CustomCSSTransitionProps {
  in: boolean;
  timeout: number;
  classNames: string;
  unmountOnExit?: boolean;
  children: React.ReactElement;
}

const CSSTransition: React.FC<CustomCSSTransitionProps> = ({
  in: inProp,
  timeout,
  classNames,
  unmountOnExit = false,
  children,
}) => {
  const [show, setShow] = useState(inProp);
  const [className, setClassName] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (inProp) {
      setShow(true);
      setClassName(`${classNames}-enter`);
      requestAnimationFrame(() => {
        setClassName(`${classNames}-enter-active`);
      });
    } else {
      setClassName(`${classNames}-exit`);
      requestAnimationFrame(() => {
        setClassName(`${classNames}-exit-active`);
      });
      if (unmountOnExit) {
        timeoutId = setTimeout(() => {
          setShow(false);
        }, timeout);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [inProp, classNames, timeout, unmountOnExit]);

  if (!show && unmountOnExit) {
    return null;
  }

  return React.cloneElement(children, {
    className: `${children.props.className || ''} ${className}`.trim(),
  });
};

export default CSSTransition;
