const handbrake = require('handbrake-js');
const path = require('path');

// Input and output paths
const inputFile = path.join(__dirname, 'public', 'videos', 'hero-background.mp4');
const outputFile = path.join(__dirname, 'public', 'videos', 'hero-background-optimized.mp4');

console.log('Starting video optimization...');
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);

// Optimization options
const options = {
  input: inputFile,
  output: outputFile,
  preset: 'web',
  quality: 25, // Lower value = higher quality but larger file (20-30 is good for web)
  optimize: true,
  'rate': 30, // Frame rate
  'maxWidth': 1280, // Maximum width
};

// Run the optimization
handbrake.spawn(options)
  .on('error', err => {
    console.error('Error during video optimization:', err);
  })
  .on('progress', progress => {
    console.log(`Progress: ${progress.percentComplete}% complete`);
  })
  .on('complete', () => {
    console.log('Video optimization completed successfully!');
  }); 