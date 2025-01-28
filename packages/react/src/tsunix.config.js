const path = require('path');
const { root } = require('postcss');

module.exports = {
    svg:{
        input: path.resolve(__dirname, 'src/svg'),        
    },
    color : {
        root: '#ff0000',
        custom:{
            primary: '#ff0000',
            secondary: '#00ff00',
            tertiary: '#0000ff',
            quaternary: '#ff00ff',
            quinary: '#00ffff',
        }
    },
    font: {
        input: path.resolve(__dirname, 'src/fonts'),        
    },
    image: {
        input: path.resolve(__dirname, 'src/images'),        
    }

};