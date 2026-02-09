/**
 * Script de optimización de imágenes para EcoDecor
 * 
 * Este script comprime imágenes JPG/PNG a WebP optimizado
 * reduciendo drásticamente el tamaño sin perder calidad visible.
 * 
 * USO:
 *   1. npm install sharp
 *   2. node scripts/optimize-images.mjs
 * 
 * Las imágenes optimizadas se guardarán en src/assets/optimized/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const CONFIG = {
  inputDirs: [
    path.join(__dirname, '../src/assets'),
    path.join(__dirname, '../src/assets/ECODECOR'),
  ],
  outputDir: path.join(__dirname, '../src/assets/optimized'),
  quality: 80,           // Calidad WebP (0-100)
  maxWidth: 1920,        // Ancho máximo en px
  extensions: ['.jpg', '.jpeg', '.png', '.webp'],
};

async function main() {
  // Verificar si sharp está instalado
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (e) {
    console.error('\n❌ Error: sharp no está instalado.');
    console.log('   Ejecuta: npm install sharp\n');
    process.exit(1);
  }

  // Crear directorio de salida si no existe
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  console.log('\n🖼️  Optimización de Imágenes - EcoDecor\n');
  console.log('=' .repeat(50));

  let totalOriginal = 0;
  let totalOptimized = 0;
  let filesProcessed = 0;

  for (const inputDir of CONFIG.inputDirs) {
    if (!fs.existsSync(inputDir)) continue;

    const files = fs.readdirSync(inputDir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!CONFIG.extensions.includes(ext)) continue;

      const inputPath = path.join(inputDir, file);
      const stats = fs.statSync(inputPath);

      // Saltar directorios
      if (stats.isDirectory()) continue;

      // Solo procesar archivos > 100KB
      if (stats.size < 100 * 1024) continue;

      const outputName = path.basename(file, ext) + '.webp';
      const outputPath = path.join(CONFIG.outputDir, outputName);

      try {
        const originalSize = stats.size;
        totalOriginal += originalSize;

        await sharp(inputPath)
          .rotate() // Auto-rotar según EXIF para corregir imágenes giradas
          .resize(CONFIG.maxWidth, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({ quality: CONFIG.quality })
          .toFile(outputPath);

        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = optimizedStats.size;
        totalOptimized += optimizedSize;

        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
        filesProcessed++;

        console.log(
          `✅ ${file.substring(0, 35).padEnd(35)} ` +
          `${formatBytes(originalSize).padStart(10)} → ` +
          `${formatBytes(optimizedSize).padStart(10)} ` +
          `(-${reduction}%)`
        );
      } catch (err) {
        console.log(`❌ ${file}: ${err.message}`);
      }
    }
  }

  console.log('='.repeat(50));
  console.log(`\n📊 Resumen:`);
  console.log(`   Archivos procesados: ${filesProcessed}`);
  console.log(`   Tamaño original:     ${formatBytes(totalOriginal)}`);
  console.log(`   Tamaño optimizado:   ${formatBytes(totalOptimized)}`);
  console.log(`   Reducción total:     ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`\n📁 Imágenes guardadas en: ${CONFIG.outputDir}\n`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

main().catch(console.error);
