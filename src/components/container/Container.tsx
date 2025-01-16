import  * as Transition from '../trancition/CssTrancition';
import * as components from './components/components';
import '../../styles/styles.css'; 
import '../../styles/tailwind.css';
import './container.css';

const Block = components.Block;
const Flex = components.Flex;
const Grid = components.Grid;
const Scroll = components.Scroll;


export const CssTrancition = Transition.default;
export {
    Block,
    Flex,
    Grid,
    Scroll
}