// src/utils/build-config.js

const path = require('path');
const fs = require('fs');

let userConfig;
const defaultConfig = {
  svg: {
    input: '../components/svg/icon'
  }
};

function buildConfig() {
  const configPath = path.resolve(process.cwd(), 'tsunix.config.js');
  console.log(configPath);
  const outputPath = path.resolve(__dirname, 'config.json');

  if (fs.existsSync(configPath)) {
    userConfig = require(configPath);
    userConfig = { ...defaultConfig, ...userConfig };

    const iconsDirectory = path.join(__dirname, userConfig.svg.input || '../components/svg/icon');
    const availableIcons = fs.readdirSync(iconsDirectory)
      .filter(file => file.endsWith('.svg'))
      .map(file => path.basename(file, '.svg'));

    userConfig.svg.output = availableIcons;
    fs.writeFileSync(outputPath, JSON.stringify(userConfig, null, 2));
    
  } else {
    console.error('No se encontró el archivo de configuración tsunix.config.js');
    process.exit(1);
  }
}

buildConfig();

module.exports = userConfig.svg.output;
