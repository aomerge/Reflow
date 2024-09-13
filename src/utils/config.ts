const fs = require('fs');
const path = require('path');

const configFilePath = path.resolve(process.cwd(), 'tsunix.config.json');


function readConfig() {
  try {
    const configFile = fs.readFileSync(configFilePath, 'utf-8');
    const config = JSON.parse(configFile);
    console.log('Configuración cargada:', config);
    return config;
  } catch (error) {
    console.error('Error al leer el archivo de configuración:', error);
    return null;
  }
}

const config = readConfig();
