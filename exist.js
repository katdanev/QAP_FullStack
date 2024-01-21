const fs = require('fs');

const filePath = 'txt.txt';

if (fs.existsSync(filePath)) {
  console.log('File exists.');
} else {
  console.log('File does not exist.');
}
