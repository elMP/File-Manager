import * as fs from 'fs';
import { finished } from 'stream/promises';
import { stdout as output } from 'node:process';

export async function readFile(filename) {
  const read = async () => {
    try {
      const readableStream = fs.createReadStream(filename, 'utf-8');

      readableStream.pipe(output);
      await finished(readableStream);
    } catch (e) {
      console.error('Operation failed');
    }
  };

  await read();
}
