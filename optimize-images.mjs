import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

// Usage: node optimize-images.mjs
// Prerequisites: npm install imagemin imagemin-mozjpeg imagemin-pngquant

(async () => {
  console.log('Optimizing images in src/assets...');
  
  const files = await imagemin(['src/assets/*.{jpg,png,jpeg}'], {
    destination: 'src/assets',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log(`Optimized ${files.length} images successfully.`);
})();