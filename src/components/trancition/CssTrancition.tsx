import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    cloneElement,
    ReactElement,
  } from 'react';
import { CustomCSSTransitionProps } from './interface/ICssTransaction';  
  
const CSSTransition: React.FC<CustomCSSTransitionProps> = React.memo(({
  in: inProp,
  timeout,
  classNames,
  unmountOnExit = false,
  none,
  children,
}) => {
  const [shouldRender, setShouldRender] = useState(inProp);
const [animationClass, setAnimationClass] = useState('');

useEffect(() => {
  if (inProp) {
    setShouldRender(true);
    setAnimationClass(`${classNames}-enter`);
  } else if (unmountOnExit) {
    setAnimationClass(`${classNames}-exit`);
    const timer = setTimeout(() => {
      setShouldRender(false);
    }, timeout);
    return () => clearTimeout(timer);
  }
}, [inProp, classNames, timeout, unmountOnExit]);

useEffect(() => {
  if (animationClass) {
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, timeout);
    return () => clearTimeout(timer);
  }
}, [animationClass, timeout]);

if (!shouldRender && unmountOnExit) {
  return null;
}

return React.cloneElement(children, {
  className: `${children.props.className || ''} ${none && animationClass}`.trim(),
});
});

export default CSSTransition;
  
