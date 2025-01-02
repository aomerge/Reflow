import React from 'react';
import {createRoot} from 'react-dom/client';
import '../style.css';
const Block = React.lazy(() => import('../../../../../src/components/container/Block'));
const Grid = React.lazy(() => import('../../../../../src/components/container/Grid'));
import { Button, Dropdown, ButtonColor, ButtonTemplate } from '../../../../../src/components/button/button';
//const Dropdown = React.lazy(() => import('../../../../../src/components/button/button').then(module => ({ default: module.Dropdown })));
const Text = React.lazy(() => import('../../../../../src/components/text/Text'));
const Card = React.lazy(() => import('../../../../../src/components/card/card'));
const Flex = React.lazy(() => import('../../../../../src/components/container/Flex'));
const Image = React.lazy(() => import('../../../../../src/components/image/image'));
const List = React.lazy(() => import('../../../../../src/components/list/list'));
const Accordion = React.lazy(() => import('../../../../../src/components/accordion/accordion'));

import { OptionTemplate as tem} from '../../../../../src/components/container/interfaces/IContainer';
import { ButtonTemplate as btnTempleate } from '../../../../../src/components/button/components/Interface/Ibutton';



const App = () => {  
  return (
    <Grid template='Dashboard-Sidevar-not-footer'>
        <Block className='bg-gray-200' >            
            <Flex template={tem.Between} >
                <Flex width={40} template={tem.Between}>
                    <Block>
                        <Text label='Reflow' type='h2'  /> 
                        <Dropdown icon='arrow-right' color={ButtonColor.trasparent}  template={btnTempleate.Icon_Affter} label='Templates' >
                            <Text label='Enterprice' type='p' />
                            <Text label='Ecommerce' type='p' />
                        </Dropdown>                       
                    </Block>
                    <Flex>
                        <Button color={ButtonColor.Primary} template={ButtonTemplate.Outline_Icon_Affter} label='Docs' />
                        <Dropdown icon='arrow-right'  template={ButtonTemplate.LINK} label='Templates' >
                            <Button label='Enterprice' template={btnTempleate.Trasparent}  />     
                            <Button label='Ecommerce'  />     
                            <Button label='Landing Page'  />     
                            <Button label='Profolio'  />                        
                        </Dropdown>
                        <Button  template={ButtonTemplate.Outline_Only} label='Color' />
                        <Button  template={ButtonTemplate.Outline_Icon_Before}  label='Colabor' />                        
                    </Flex>
                </Flex>
                <Block >
                    <Button label='github' />
                    <Button label='colab' />
                </Block>
            </Flex>
        </Block>
        <Block >
            <Accordion title="Introduction" template='custom' >
                <Button label='Instalation' />
                <Button label='Structure of components' />
                <Button label='Hooks' />
            </Accordion>
            <Accordion title="Components" template='custom' >
                <Accordion title="Containers" template='custom' >
                    <Button label='Block' />
                    <Button label='Flex' />
                    <Button label='Grid' />
                    <Button label='Scroll' />                    
                </Accordion>
                <Button label='Button' />
                <Button label='Text' />
                <Button label='Card' />                
                <Button label='Image' />
                <Button label='List' />
                <Button label='Accordion' />
            </Accordion>
            <Accordion title="Loaders" content="Content for section 3" />
            <Accordion title="Templeate" content="Comming soon" />                       
            <Accordion title="Colaboration" content="Content for section 3" />
        </Block>
        <Block className='bg' >
            <Card className='head' template="custom-row-quinary" >
                <Block>
                    <Text label='Welcome to the docs' type='h2' />
                    <Text 
                        label='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' 
                        type='p' />
                </Block>
                <Block>
                    <Image src='https://via.placeholder.com/300x150' alt='placeholder' width={600} height={300} />
                </Block>
            </Card>
            <Block className='sectionTwo'>
                <Text label='User Guides' type='h2' />
                <Flex>
                    <Card button={{label: "hola"}} title='Developer Onbording' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button"  />
                    <Card title='Example' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button"  />
                    <Card title='Example' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button"  />
                </Flex>
            </Block>
        </Block>        
    </Grid>
  );
};

export default App;

const Apptwo = () => <h1>Hello, World!</h1>;


// Renderiza la aplicación en el DOM
performance.mark('startRender');
performance.measure('startRenderToNow', 'startRender');

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

performance.mark('endRender');
performance.measure('renderTime', 'startRender', 'endRender');

console.log(performance.getEntriesByType('measure'));
