// Sample code exercising features of the console object

// Clearing the console
console.clear();

// Output messages using console
console.log('This is a log message.');
console.error('This is an error message.');
console.warn('This is a warning message.');
console.info('This is an informational message.');

// String substitution in console.log()
const name = 'Kateryna';
const lastName = 'Danevych';
console.log('User: %s, Last name: %s', name, lastName);


// Displaying an object using console.dir()
const sampleObject = { key1: 'value1', key2: 'value2' };
console.dir(sampleObject, { colors: true, depth: 2 });



// Timing an operation using console.time() and console.timeEnd()
console.time('operation');
// Simulating a time-consuming operation
for (let i = 0; i < 1000000; i++) {

  // Perform some computation
}
console.timeEnd('operation');

// Counting occurrences using console.count()
console.count('Counter');
console.count('Counter');
console.count('Counter');

// Displaying a stack trace using console.trace()
function sampleFunction() {
  console.trace('Trace: This is a stack trace.');
}

// Calling the sample function
sampleFunction();
