const fs = require('fs');

fs.writeFile('newFile.txt', 'Hello, this is creating and writing new file using writeFile method! And its works!', 'utf8', (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
    return;
  }
  console.log('File written successfully!!!.');
});
