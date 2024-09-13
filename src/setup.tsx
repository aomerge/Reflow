import React from 'react';

interface MiBotonProps {
  label: string;
}

export const MiBoton: React.FC<MiBotonProps> = ({ label }) => {
  return (
    <button>
        {label}
    </button>
    );
};
