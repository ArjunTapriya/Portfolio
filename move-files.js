const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'temp-app');
const destDir = __dirname;

try {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.renameSync(srcPath, destPath);
  }
  fs.rmdirSync(srcDir);
  console.log('Successfully moved files and removed temp-app directory.');
} catch (error) {
  console.error('Error moving files:', error);
}
