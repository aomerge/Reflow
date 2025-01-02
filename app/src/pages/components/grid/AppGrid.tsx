import React from 'react';
import {createRoot} from 'react-dom/client';
import '../style.css';
const Block = React.lazy(() => import('../../../../../src/components/container/Block'));
const Grid = React.lazy(() => import('../../../../../src/components/container/Grid'));
const Button = React.lazy(() => import('../../../../../src/components/button/button.v1'));
const Dropdown = React.lazy(() => import('../../../../../src/components/button/button.v1').then(module => ({ default: module.Dropdown })));
const Text = React.lazy(() => import('../../../../../src/components/text/Text'));
const Card = React.lazy(() => import('../../../../../src/components/card/card'));
const Flex = React.lazy(() => import('../../../../../src/components/container/Flex'));
const Image = React.lazy(() => import('../../../../../src/components/image/image'));
const List = React.lazy(() => import('../../../../../src/components/list/list'));
const Accordion = React.lazy(() => import('../../../../../src/components/accordion/accordion'));

import { OptionTemplate as tem} from '../../../../../src/components/container/interfaces/IContainer';
import { ButtonTemplate as btnTempleate } from '../../../../../src/components/button/Interface/Ibutton';



const App = () => {  
  return (
    <Grid template='Dashboard-Sidevar-not-footer'>
        <Block className='bg-gray-200' >            
            <Flex template={tem.Between} >
                <Flex width={40} template={tem.Between}>
                    <Block>
                        <Text label='Reflow' type='h2' />                        
                    </Block>
                    <Flex>
                        <Button template={btnTempleate.LINK} label='Docs' />
                        <Dropdown icon='arrow-right'  template={btnTempleate.Icon_Affter} label='Templates' >
                            <Button label='Enterprice' template={btnTempleate.Trasparent}  />     
                            <Button label='Ecommerce'  />     
                            <Button label='Landing Page'  />     
                            <Button label='Profolio'  />                        
                        </Dropdown>
                        <Button template={btnTempleate.LINK} label='Color' />
                        <Button  label='Colabor' />                        
                    </Flex>
                </Flex>
                <Block >
                    <Button label='Click me!' />
                </Block>
            </Flex>
        </Block>
        <Block >
            <Accordion title="Introduction" content="Content for section 1" />
            <Accordion title="Components" content="Content for section 2" />
            <Accordion title="Loaders" content="Content for section 3" />
            <Accordion title="Templeate" content="Content for section 3" />                       
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
