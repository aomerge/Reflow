import React, { createContext, useContext, useState, ReactElement, ReactNode } from 'react';

/** 
 *  Interface for Block component props
*/
export type ElementType = keyof JSX.IntrinsicElements;

// Interface for Block component props
/**
 * Interface representing the properties for a Block component.
 *
 * @property {ReactNode} children - The child elements to be rendered within the block.
 * @property {ReactElement<any>} [newElement] - An optional new React element to be rendered.
 * @property {ElementType} [type] - The type of the element to be rendered.
 * @property {React.CSSProperties} [style] - Optional CSS properties to apply to the block.
 * @property {string} [className] - Optional CSS class name to apply to the block.
 * @property {number} [col_start] - Optional starting column for grid layout.
 * @property {number} [col_end] - Optional ending column for grid layout.
 * @property {number} [row_start] - Optional starting row for grid layout.
 * @property {number} [row_end] - Optional ending row for grid layout.
 * @property {boolean} [animationEffect] - Optional flag to enable or disable animation effects.
 * @property {any} [key: string] - Additional properties that can be added dynamically.
 */
export interface BlockProps {
  children: ReactNode;
  newElement?: ReactElement<any>;
  type?: ElementType;
  style?: React.CSSProperties;
  className?: string;
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  animationEffect?: boolean;
  [key: string]: any;
}

/**
 * Interface representing the context type for a block component.
 */
export interface BlockContextType {
    /**
     * The current outlet node.
     */
    outlet: ReactNode;

    /**
     * Function to set the outlet node.
     */
    setOutlet: React.Dispatch<React.SetStateAction<ReactNode>>;

    /**
     * The current ID, which can be a number or null.
     */
    Id: number | null;

    /**
     * Function to set the ID.
     */
    setId: React.Dispatch<React.SetStateAction<number | null>>;
}

/**
 * Props for the Grid component.
 * 
 * @interface GridProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 * 
 * @property {ReactNode} [children] - The content of the grid.
 * @property {string} [item] - The item property for the grid.
 * @property {string} [justify] - The justify property for the grid.
 * @property {number} col - The number of columns in the grid.
 * @property {number} row - The number of rows in the grid.
 */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    template?: string;
    children?: ReactNode;
    item?: string;
    justify?: string;
    col?: number;
    row?: number;    
  }

export enum OptionTemplate {
    Between = 'Between',
    Center = 'Center',
    End = 'End',
  }

/**
 * Interface for FlexProps which extends the standard HTML attributes for a div element.
 * 
 * @property {ReactNode} children - The content to be rendered inside the flex container. 
 */
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: number;
  template?: OptionTemplate;
  icon?: string;
}

