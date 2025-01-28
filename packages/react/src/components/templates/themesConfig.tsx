// themesConfig.js
import React, { Component } from 'react';
import {Button} from '../button/button';
import {INavigatorProps} from '../navigator/INavigation';

const themesConfig = {
  basic:{
  component: <nav>
      <Button label="Home" />
      <Button label="Projects" />
      <Button label="About" />
    </nav>
  },
  h: {
    styles: 'bg-white text-black',
    component: ({Url, children}: INavigatorProps)=>{
      return(
        <div id='basic' className='flex w-full flex-col  py-4 p-6 bg-secondary mb-5  text-black'>
          <section className='flex justify-between mb-10'>
              <ul className='flex gap-5'>
                <li><p>number: 477555555</p></li>
                <li>site web</li>
                <li></li>
              </ul>
              <ul className='flex gap-5'>
                <li>facebook</li>
                <li>twitter</li>
                <li>instagram</li>
              </ul>
          </section>
          <section className='flex w-full justify-between'>
              <div>
                logo
                <img src="" alt="" />
              </div>
              <nav className='gap-5 flex'>                
                  {
                    React.Children.map(children, (child, index) => {
                      return React.cloneElement(child as React.ReactElement, { key: index, className: 'bg-black text-white roudend-md', onFocus:()=>{alert("hello")} });
                    })
                  }                                                    
              </nav>
              <div>
                <ul className='flex gap-5'>
                  <li>
                    hola
                  </li>
                  <li>
                    min
                  </li>
                </ul>
              </div>
          </section>
        </div>
      );
    },
  },
  dark: {
    styles: 'bg-gray-800 text-white',
    component: <h1>Dark Theme</h1>,
  },
  colorful: {
    styles: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white',
    component: (
      <div>
        <h1>Colorful Theme</h1>
        <Button label="Click Me!" onClick={() => alert('Colorful theme button clicked!')} />
      </div>
    ),
  },
};

export default themesConfig;
