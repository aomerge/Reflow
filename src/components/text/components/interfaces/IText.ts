export type ElementType = keyof JSX.IntrinsicElements;
export interface TextProps {
  label: string;
  type: ElementType;
  size?: String;
  color?: string;
}