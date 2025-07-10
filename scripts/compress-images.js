const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = 85;
const MAX_WIDTH = 1920;

async function compressImage(inputPath, outputPath, options = {}) {
  try {
    const { width, height, quality = QUALITY } = options;
    
    let sharpInstance = sharp(inputPath);
    
    // Resize if dimensions provided
    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Determine output format based on file extension
    const ext = path.extname(outputPath).toLowerCase();
    
    if (ext === '.png') {
      await sharpInstance
        .png({ quality })
        .toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharpInstance
        .jpeg({ quality })
        .toFile(outputPath);
    } else if (ext === '.webp') {
      await sharpInstance
        .webp({ quality })
        .toFile(outputPath);
    } else {
      await sharpInstance
        .jpeg({ quality })
        .toFile(outputPath);
    }
    
    console.log(`✅ Compressed: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (isImageFile(file)) {
      await compressImage(filePath, filePath, {
        maxWidth: MAX_WIDTH,
        quality: QUALITY
      });
    }
  }
}

function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const ext = path.extname(filename).toLowerCase();
  return imageExtensions.includes(ext);
}

async function main() {
  console.log('🖼️  Starting image compression...');
  
  try {
    await processDirectory(PUBLIC_DIR);
    console.log('✅ Image compression completed!');
  } catch (error) {
    console.error('❌ Error during compression:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { compressImage, processDirectory }; 