import React, {useEffect} from 'react';
import '../../styles/tailwind.css';
import '../../styles/styles.css';
import './button.css';
import * as compnent from './components/component';
import * as enu from './components/Interface/Ibutton';

const Button = compnent.Button;
const Dropdown = compnent.Dropdown;
const ButtonTemplate = enu.ButtonTemplate;
const ButtonColor = enu.ButtonColor;

export {
    Button,
    Dropdown,
    ButtonTemplate,
    ButtonColor
};
