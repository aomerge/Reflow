import React from 'react';
import { ReactNode } from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  speed?: number;
  children?: ReactNode;
  [key: string]: any;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '100%',
  viewBox = '0 0 400 130',
  backgroundColor = 'rgba(236, 235, 235, 0.2)',
  foregroundColor = 'rgba(236, 235, 235, 0.8)',
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
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${uniqueId}`}
          x1="-100%"
          y1="0%"
          x2="0%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={backgroundColor} />
          <stop offset="50%" stopColor={foregroundColor} />
          <stop offset="100%" stopColor={backgroundColor} />
          <animate
            attributeName="x1"
            from="-100%"
            to="100%"
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            from="0%"
            to="200%"
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, {
              fill: `url(#gradient-${uniqueId})`,
            })
          : child
      )}
    </svg>
  );
};

export default SkeletonLoader;



