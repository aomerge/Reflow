import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import Block from '../../../../../src/components/container/Block';
import Grid from '../../../../../src/components/container/Grid';
import Button, {Dropdown} from '../../../../../src/components/button/button.v1';
import Text from '../../../../../src/components/text/Text';
import Card from '../../../../../src/components/card/card';
import Flex from '../../../../../src/components/container/Flex';
import Image from '../../../../../src/components/image/thumbnail';
import List from '../../../../../src/components/list/list';
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
        <Block className='bg-gray-200'>
            <Block>
                <Text label='Documentation' type='h2' />
            </Block>
            <Block>
                <Text label='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' type='p' />
            </Block>            
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
                    <Card button='Read of docs' title='Developer Onbording' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button-tertiary"  />
                    <Card title='Example' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button"  />
                    <Card title='Example' content='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ' template="button"  />
                </Flex>
            </Block>
        </Block>        
    </Grid>
  );
};

export default App;



// Renderiza la aplicación en el DOM
const rootElement = document.createElement('div');
const start = performance.now();
rootElement.id = 'root';
document.body.appendChild(rootElement);
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
const end = performance.now();
console.log(`Tiempo de renderizado: ${end - start}ms`);