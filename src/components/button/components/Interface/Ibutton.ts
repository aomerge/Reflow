import { Icon } from "../../../svg/icon";
import React from "react";

enum ButtonTemplate {
    LINK = 'link',
    Icon = 'icon',
    Icon_Affter = 'icon-affter',
    Primary = 'primary',
    Trasparent = 'trasparent',
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