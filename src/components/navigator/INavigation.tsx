import React, { ReactNode } from "react";
import themesConfig from "../templates/themesConfig";


export interface INavigatorProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;  
  col_start?: number;
  col_end?: number;
  row_start?: number;
  row_end?: number;
  style?: React.CSSProperties;
  template?: string;
  Url?: string;
  onSubElement?: React.ReactElement
  }