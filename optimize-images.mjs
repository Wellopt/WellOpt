import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs/promises';

// Usage: node optimize-images.mjs
// Prerequisites: npm install imagemin imagemin-webp

(async () => {
  console.log('Converting images to WebP in src/assets...');
  
  const files = await imagemin(['src/assets/*.{jpg,png,jpeg}'], {
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  for (const file of files) {
    const parsed = path.parse(file.sourcePath);
    const newPath = path.join('src/assets', `${parsed.name}.webp`);
    await fs.writeFile(newPath, file.data);
    console.log(`Converted ${parsed.base} -> ${parsed.name}.webp`);
  }

  console.log(`Converted ${files.length} images successfully.`);
})();