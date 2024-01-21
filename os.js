// Add the os module
const os = require('os');

// Get basic information about OS
console.log('Platform:', os.platform()); // Output: 'darwin'
console.log('Architecture:', os.arch()); // Output: 'arm64'
console.log('OS Version:', os.version()); // Output: '23.2.0'

// Get information about memory
console.log('Total Memory:', os.totalmem()); // Total memory
console.log('Free Memory:', os.freemem()); // Free memory

// Deeper info

const cpus = os.cpus();
console.log('CPU Information:', cpus); // CPU

const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces); // Network interfaces

const hostname = os.hostname();
console.log('Hostname:', hostname); // Hostname

const loadavg = os.loadavg();
console.log('System Load Average:', loadavg); // System load average
