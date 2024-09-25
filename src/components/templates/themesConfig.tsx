// themesConfig.js
import React from 'react';
import Button from '../button/button.v1';
import {INavigatorProps} from '../navigator/INavigation';

const themesConfig = {
  basic: {
    styles: 'bg-white text-black',
    component: ({Url, children}: INavigatorProps)=>{
      return(
        <div id='basic' className='flex w-full flex-col'>
          <section>
              <p>asamsa</p>
          </section>
          <section className='flex w-full justify-between'>
              <div>
                logo
                <img src="" alt="" />
              </div>
              <nav className='gap-5 flex'>                
                  {
                    React.Children.map(children, (child, index) => {
                      return React.cloneElement(child as React.ReactElement, { key: index, className: 'bg-tertiary text-white' });
                    })
                  }                                                    
              </nav>
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
