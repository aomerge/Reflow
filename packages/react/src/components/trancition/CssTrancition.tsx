import React, {
    useState,
    useLayoutEffect,
    useEffect,
    useRef,
    cloneElement,
    ReactElement,
  } from 'react';
import { CSSTransitionProps } from './interface/ICssTransaction';  
import "./style.css";

const CSSTransition: React.FC<CSSTransitionProps> = ({
  in: isVisible,
  timeout,
  classNames,
  unmountOnExit = false,
  children,
  none = false,
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [animationClass, setAnimationClass] = useState('');

  /**
   * useEffect principal para manejar el montaje y desmontaje
   * según la prop `isVisible` y `unmountOnExit`.
   */
  useEffect(() => {
    if (isVisible) {
      // Aplicamos la clase de "entrada" (p.e. "fade-in")
      setAnimationClass(`${classNames}-in`);
      setShouldRender(true);
    } else if (unmountOnExit) {
      // Aplicamos la clase de "salida" (p.e. "fade-out")
      //setAnimationClass(`${classNames}-out`);
      const timer = setTimeout(() => setShouldRender(false), timeout);
      return () => clearTimeout(timer);
    }
  }, [isVisible, classNames, timeout, unmountOnExit]);

  /**
   * useEffect para limpiar la clase de animación
   * después de que termine la animación.
   */
  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => setAnimationClass(''), timeout);
      return () => clearTimeout(timer);
    }
  }, [animationClass, timeout]);

  // Si no debe renderizarse (porque ya salió y unmountOnExit es true), retornamos null
  if (!shouldRender && unmountOnExit) return null;

  // Clonamos el elemento hijo para añadir/combinar la clase de animación
  const childWithClass = React.cloneElement(children, {
    className: [
      children.props.className || '',
      none ? '' : animationClass, // si none es true, no añadimos animación
    ]
      .join(' ')
      .trim(),
  });

  return childWithClass;
};

export default CSSTransition;
