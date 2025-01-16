import React, { useState, useEffect, ReactElement } from 'react';

export interface CSSTransitionProps {
  /** Indica si el componente debe estar visible o no */
  in: boolean;
  /** Duración de la animación en milisegundos */
  timeout: number;
  /** Nombre base de la clase de animación (p.e. "fade") */
  classNames: string;
  /** Desmontar (no renderizar) el contenido cuando `in = false` */
  unmountOnExit?: boolean;
  /** Hijo al que se le aplicarán las clases de animación */
  children: ReactElement;
  /**
   * Propiedad opcional que, si está en `true`,
   * omite la animación (ejemplo de tu código original).
   */
  none?: boolean;
}
