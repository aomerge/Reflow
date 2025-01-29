const fs = require('fs');
const path = require('path');

/**
 * Copia archivos de una carpeta origen a un destino, manteniendo la estructura de directorios.
 *
 * @param {string} sourceDir - Directorio origen.
 * @param {string} destDir - Directorio destino.
 * @param {RegExp} filePattern - Patrón para los archivos que deseas copiar (ejemplo: /\.svg$/).
 */
function copyFiles(sourceDir, destDir, filePattern) {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    console.error(`❌ Error: El directorio de origen no existe: ${sourceDir}`);
    process.exit(1);
  }

  // Verifica si el directorio de destino existe, si no, lo crea
  if (!fs.existsSync(destDir)) {
    console.log(`📁 Creando directorio de destino: ${destDir}`);
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Recorre los archivos y subdirectorios en el directorio de origen
  fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      // Si es un directorio, llama recursivamente a copyFiles
      copyFiles(sourcePath, destPath, filePattern);
    } else if (filePattern.test(entry.name)) {
      // Si es un archivo que coincide con el patrón, lo copia
      fs.copyFileSync(sourcePath, destPath);
      console.log(`📂 Copiado: ${sourcePath} -> ${destPath}`);
    }
  });
}

// Obtén el directorio de destino desde los argumentos
const args = process.argv.slice(2);
const destArg = args.find(arg => arg.startsWith('--dir='));

if (!destArg) {
  console.error('❌ Error: Debes proporcionar el directorio de destino con el parámetro --dir=<ruta>');
  console.error('Ejemplo: node copy-files.js ./src --dir=./dist');
  process.exit(1);
}

// Extrae el valor del directorio de destino
const destDir = path.resolve(process.cwd(), destArg.split('=')[1]);

// Determina el directorio de origen desde los argumentos
const sourceDir = args[0];

if (!sourceDir) {
  console.error('❌ Error: Debes especificar el directorio de origen.');
  console.error('Ejemplo: node copy-files.js ./src --dir=./dist');
  process.exit(1);
}

// Patrón para copiar solo archivos `.svg`
const filePattern = /\.svg$/;

// Ejecutar la función de copia
copyFiles(sourceDir, destDir, filePattern);

console.log('✅ Todos los archivos SVG se copiaron correctamente.');
