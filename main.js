import { parseArgs } from './modules/args.js';

const args = parseArgs();

const userName = args['username'] || 'Anonymous';
console.log(`Welcome to the File Manager, ${userName}`);
