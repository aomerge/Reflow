import React from "react"
import { 
    Grid,
    Block,
    Flex,
    Text,
    Button,
    Dropdown,
    ButtonColor,
    ButtonTemplate,
    dropdownDirection,
    tem,
    Accordion,
    Card,
    Image } from "../app"

//***************************************************************************/
//
//                           BODY
//
//***************************************************************************/
export const Body = ()=>(
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
  )

//***************************************************************************/
//
//                           HEADER
//
//***************************************************************************/
export const Header = () => (
    <Block className="bg-gray-200">
        <Flex template={tem.Between}>
            <Flex width={40} template={tem.Between}>
                <Block>
                    <Text label="Reflow" type="h2" />
                    <Dropdown
                        direction={dropdownDirection.right}
                        icon="arrow-right"
                        color={ButtonColor.Primary}
                        template={ButtonTemplate.Outline_Icon_Only}
                        label="V1.0.0"
                    >
                        <Text label="Enterprice" type="p" />
                        <Text label="Ecommerce" type="p" />
                    </Dropdown>
                </Block>
                <Flex>
                    <Button
                        color={ButtonColor.Primary}
                        template={ButtonTemplate.Outline_Icon_Affter}
                        label="Docs"
                    />
                    <Dropdown
                        direction={dropdownDirection.left}
                        icon="arrow-right"
                        template={ButtonTemplate.LINK}
                        label="Templates"
                    >
                        <Button label="Enterprice" template={ButtonTemplate.Trasparent} />
                        <Button label="Ecommerce" />
                        <Button label="Landing Page" />
                        <Button label="Profolio" />
                    </Dropdown>
                    <Button template={ButtonTemplate.Outline_Only} label="Color" />
                    <Button template={ButtonTemplate.Outline_Icon_Before} label="Colabor" />
                </Flex>
            </Flex>
            <Block>
                <Button template={ButtonTemplate.lock} label="github" />
                <Button label="colab" />
            </Block>
        </Flex>
    </Block>
)

//***************************************************************************/
//
//                           SIDEBAR
//
//***************************************************************************/
export const Sidebar = () => (
    <Block animationEffect={true} type="section">
        <Block>
            <Text label="Getting Started" type="h4" />
            <Text size={'sm'} label="Installation" type="p" />            
        </Block>
        <Accordion title="Components" template="custom">
            <Accordion title="Containers" template="custom">
                <Button label="Block" />
                <Button label="Flex" />
                <Button label="Grid" />
                <Button label="Scroll" />
            </Accordion>
            <Button label="Button" />
            <Button label="Text" />
            <Button label="Card" />
            <Button label="Image" />
            <Button label="List" />
            <Button label="Accordion" />
        </Accordion>
        <Accordion title="Loaders" content="Content for section 3" />
        <Accordion title="Templeate" content="Comming soon" />
        <Accordion title="Colaboration" content="Content for section 3" />
    </Block>
)