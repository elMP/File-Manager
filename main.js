import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { currentDirectory } from './modules/directory.js';
import { parseArgs } from './modules/args.js';
import { doCommand } from './modules/actions.js';

const readlineInterface = readline.createInterface({ input, output });

const args = parseArgs();
const directory = new currentDirectory();

const userName = args['username'] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}`);
console.log(directory.getDirectoryPrompt());
output.write('> ');

readlineInterface.on('line', async (input) => {
  if (input === '.exit') readlineInterface.close();
  else {
    await doCommand(input, directory);
    console.log(directory.getDirectoryPrompt());
    output.write('> ');
  }
});

readlineInterface.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
