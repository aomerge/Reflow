import { Icon } from "../../../svg/icon";
import React from "react";

enum ButtonTemplate {
    Default = 'default',
    Only = 'only',
    Icon_Affter = 'icon-after',
    Icon_Before = 'icon-before',
    Icon_Only = 'icon-only',
    LINK = 'link',
    Trasparent = 'trasparent',
    Outline = 'outline',  
    Outline_Only= 'outline-only',  
    Outline_Icon_Affter = 'outline-icon-after',
    Outline_Icon_Before = 'outline-icon-before',
    Outline_Icon_Only = 'outline-icon-only',
    Outline_Link = 'outline-link',
    Outline_Link_Icon_Affter = 'outline-link-icon-after',
    Outline_Link_Icon_Before = 'outline-link-icon-before'    
}

enum ButtonColor {
    trasparent = 'trasparent',
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Light = 'light',
    Dark = 'dark',
    Link = 'link',
    White = 'white',
    Black = 'black',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  element?: React.ReactElement;
  template?: ButtonTemplate;
  icon?: string;
  color?: ButtonColor;
}

export {
  ButtonProps,
  ButtonTemplate,
  ButtonColor,
}