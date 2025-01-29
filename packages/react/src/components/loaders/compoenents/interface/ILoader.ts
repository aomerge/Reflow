import { ReactNode } from "react";

export interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  speed?: number;
  children?: ReactNode;
  [key: string]: any;
}