import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { parseArgs } from './modules/args.js';

const readlineInterface = readline.createInterface({ input, output });

const args = parseArgs();

const userName = args['username'] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}`);
console.log('You are currently in you working directory');

readlineInterface.on('line', (input) => {
  if (input === '.exit') readlineInterface.close();
  else console.log('You are currently in you working directory');
});

readlineInterface.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
