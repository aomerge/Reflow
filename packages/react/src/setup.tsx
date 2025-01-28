import React from 'react';
import { Block, Flex } from '../src/components/container/Container';
//const Block = React.lazy(() => import('../../src/components/container/Block'));
const Grid = React.lazy(() => import('../src/components/container/Grid'));
import * as button from '../src/components/button/button';
//const Dropdown = React.lazy(() => import('../../../../../src/components/button/button').then(module => ({ default: module.Dropdown })));
import { Text } from '../src/components/text/Text';
import { Card } from '../src/components/card/card';
//const Flex = React.lazy(() => import('../../../../src/components/container/Flex'));
const Image = React.lazy(() => import('../src/components/image/image'));
const List = React.lazy(() => import('../src/components/list/list'));
const Accordion = React.lazy(() => import('../src/components/accordion/accordion'));

import { OptionTemplate as tem} from '../src/components/container/components/interfaces/IContainer';
import { ButtonTemplate as btnTempleate } from '../src/components/button/components/Interface/Ibutton';

interface MiBotonProps {
  label: string;
}

export const MiBoton: React.FC<MiBotonProps> = ({ label }) => {
  return (
    <button>
        {label}
    </button>
    );
};

const Button = button.Button;
const Dropdown = button.Dropdown
const ButtonColor = button.ButtonColor;
const ButtonTemplate = button.ButtonTemplate;
const DropdownDirection = button.dropdownDirection;





export {
  Grid,
  Block,
  Flex,
  Text,
  Card,
  Image,
  List,
  Accordion,
  tem,
  btnTempleate,
  Button,
  Dropdown,
  ButtonColor,
  ButtonTemplate,
  DropdownDirection
  
}
