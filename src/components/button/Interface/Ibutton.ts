import { Icon } from "../../svg/icon";

export enum ButtonTemplate {
    LINK = 'link',
    Icon = 'icon',
    Icon_Affter = 'icon-affter',
    Primary = 'primary',
    Trasparent = 'trasparent',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  element?: React.ReactElement;
  template?: ButtonTemplate;
  icon?: string;
}