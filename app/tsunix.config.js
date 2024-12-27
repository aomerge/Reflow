const path = require('path');

module.exports = {    
    color : {
        primary: '#6A42C2',
        secondary: '#9AD948',
        tertiary: '#563A9C',
        quaternary: '#110E0E',   
        quinary: '#0B1121',
        black: '#121212',
        white: '#DEDEDE',     
    },
    template: {
        input: path.resolve(__dirname, 'src/template'),    
    },
    api:{
        
    },
    rute: {
        input: path.resolve(__dirname, 'src/rute'),    
    },
    output: {},

    
};