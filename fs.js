// Add fs
const fs = require('fs');

// Path to my txt file
const filePath = './txt.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Reading error: ${err.message}`);
    return;
  }

  // Show file in console
  console.log('Hi! now you could read your txt file here:');
  console.log();
  console.log(data);
});



