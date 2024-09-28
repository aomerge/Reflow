const path = require('path');

module.exports = {
    svg:{
        input: path.resolve(__dirname, 'src/svg'),        
    },
    color : {
        primary: '#B0FF40',
        secondary: '#9AD948',
        tertiary: '#0e5351',
        quaternary: '#3D3D3D',   
        quinary: '#B8B84D',
        black: '#121212',
        white: '#DEDEDE',     
    },
    template: {
        input: path.resolve(__dirname, 'src/template'),    
    }
    
};