import React from 'react';
import { SkeletonLoaderProps } from '../interface/ILoader';


function applyFillToSVGChildren(
    children: React.ReactNode,
    fill: string
  ): React.ReactNode {
    return React.Children.map(children, (child) => {
      // Si no es un elemento React (string, null, etc.), lo devolvemos tal cual
      console.log("child",children);
      if (!React.isValidElement(child)) return child;
  
      // Para manejar la recursión:
      // 1) Clonamos el elemento.
      // 2) Le pasamos `fill` solo si es un elemento SVG que pueda usar fill
      //    (por ejemplo, <rect>, <circle>, <path>, etc.).
      // 3) También transformamos sus hijos.
      return React.cloneElement(child as React.ReactElement<React.SVGProps<SVGElement>>, {
              // Aquí podrías poner una lógica extra para verificar si el tipo
              // del elemento es <rect>, <circle>, etc. Con frecuencia,
              // pasar `fill` a todos no da problemas si no lo soportan.
              fill: fill,
      
              // Mantenemos los hijos, pero les aplicamos el mismo proceso recursivo.
              children: applyFillToSVGChildren(child.props.children, fill),
            });
    });
  }

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 400 130',
  backgroundColor = '#3f3f41',
  foregroundColor = 'var(--theme)',
  speed = 2,
  children,
  ...props
}) => {
  const uniqueId = Math.random().toString(36).substring(2, 15);

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio="none"
      className='skeleton-shimmer'
      {...props}
    >
      <defs>
        {/* <linearGradient
          id={`gradient-${uniqueId}`}
          x1="-50%"
          y1="0%"
          x2="150%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={backgroundColor} />
          <stop offset="50%" stopColor={foregroundColor} />
          <stop offset="100%" stopColor={backgroundColor} />                    
          <animate
            attributeName="x2; y1"
            values="50%; 150%; 250%; 350%" 
            dur={`${speed}s`}
            repeatCount="indefinite"
        />
        </linearGradient> */}
      </defs>
      {/* {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement)
          : child
      )} */}
      {applyFillToSVGChildren(children, `url(#gradient-${uniqueId})` as string)}
    </svg>
  );
};