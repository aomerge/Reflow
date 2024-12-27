import React from 'react';
import { IconProps } from './interface/Iicon';
import { getConfig } from '../../utils/config';

const iconosDisponibles = getConfig().svg.output;

export const IconNamesMap = iconosDisponibles.reduce((iconMap: Record<string, string>, iconName: string) => {
  const formattedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  iconMap[formattedName] = iconName;
  return iconMap;
}, {});

/**
 * Icon component that renders an SVG icon.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @param {string} props.icon - The name of the icon to render.
 * @param {string} [props.color='black'] - The color of the icon.
 * @param {number} [props.size=24] - The size of the icon.
 * @returns {JSX.Element} The rendered SVG icon or a fallback message if the icon is not available or fails to load.
 *
 * @example
 * <Icon icon="home" color="blue" size={32} />
 *
 * @remarks
 * This component requires the icon to be available in the same directory as an SVG file.
 * If the icon is not available, a warning is logged and a fallback message is displayed.
 * If there is an error loading the icon, an error is logged and an empty paragraph is displayed.
 */
export const Icon: React.FC<IconProps> = ({ icon, color = 'black', size = 24 }) => {
  if (!iconosDisponibles.includes(icon)) {
    console.warn(`El ícono "${icon}" no está disponible.`);
    return <p>Ícono no encontrado</p>;
  }

  try {    
    const SvgComponent = require(`./icon/${icon}.svg`).default;
    
    return (
      <SvgComponent
        style={{ fill: color, width: size, height: size }}
        aria-label={icon}
      />
    );
  } catch (error) {
    console.error(`Error al cargar el ícono "${icon}":`, error);
    return <p> </p>;
  }
};
