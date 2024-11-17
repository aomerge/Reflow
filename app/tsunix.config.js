const path = require('path');

module.exports = {
    svg:{
        input: path.resolve(__dirname, 'src/svg'),        
    },
    color : {
        primary: '#3498db',
        secondary: '#9AD948',
        tertiary: '#0e5351',
        quaternary: '#3D3D3D',   
        quinary: '#0B1121',
        black: '#121212',
        white: '#DEDEDE',     
    },
    template: {
        input: path.resolve(__dirname, 'src/template'),    
    }
    
};