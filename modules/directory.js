import * as os from 'os';
import * as fs from 'fs/promises';
import { chdir, cwd } from 'node:process';

import { sortCaseInsensitive } from './sort.js';

export class currentDirectory {
  constructor() {
    this.homeDirectory = os.homedir();
    chdir(this.homeDirectory);
  }

  getDirectory() {
    return this.homeDirectory;
  }

  getDirectoryPrompt() {
    return `You are currently in ${this.homeDirectory}`;
  }

  async readDirectory() {
    try {
      let files = await fs.readdir(this.getDirectory(), {
        withFileTypes: true,
      });

      let filesArray = [];
      let dirArray = [];

      files.forEach((file) => {
        if (file.isDirectory()) {
          dirArray.push({
            Name: file.name,
            Type: 'directory',
          });
        } else {
          filesArray.push({
            Name: file.name,
            Type: 'file',
          });
        }
      });

      filesArray = filesArray.sort(sortCaseInsensitive);
      dirArray = dirArray.sort(sortCaseInsensitive);

      console.table(dirArray.concat(filesArray));
    } catch (e) {
      console.error(e.message);
    }
  }

  async changeDirectory(path) {
    try {
      await chdir(path);
      this.homeDirectory = cwd();
    } catch (e) {
      console.error('Operation failed');
    }
  }
}
