// src/utils/build-config.js

const path = require('path');
const fs = require('fs');

function buildConfig() {
  const configPath = path.resolve(process.cwd(), 'tsunix.config.js');
  console.log(configPath);
  const outputPath = path.resolve(__dirname, 'config.json');

  if (fs.existsSync(configPath)) {
    const userConfig = require(configPath);
    fs.writeFileSync(outputPath, JSON.stringify(userConfig, null, 2));
    console.log('Configuración construida exitosamente en config.json');
  } else {
    console.error('No se encontró el archivo de configuración tsunix.config.js');
    process.exit(1);
  }
}

buildConfig();
