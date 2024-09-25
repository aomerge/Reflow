const path = require('path');

module.exports = {
    svg:{
        input: path.resolve(__dirname, 'src/svg'),        
    },
    color : {
        primary: '#F2FEE2',
        secondary: '#000F0F',
        tertiary: '#0000ff'        
    },
    template: {
        input: path.resolve(__dirname, 'src/template'),    
    }
    
};