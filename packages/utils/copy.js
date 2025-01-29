const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
    fs.copyFile(source, destination, (err) => {
        if (err) {
            console.error(`Error copying file: ${err}`);
        } else {
            console.log(`File copied from ${source} to ${destination}`);
        }
    });
}

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error('Usage: node copy.js <source> <destination>');
    process.exit(1);
}

const source = path.resolve(args[0]);
const destination = path.resolve(args[1]);

copyFile(source, destination);