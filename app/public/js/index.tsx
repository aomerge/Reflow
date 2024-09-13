import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/app';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<App />, document.getElementById('root'));
}


export const MiBoton: React.FC<{ label: string }> = ({ label }) => {
  return <button>{label}</button>;
};
