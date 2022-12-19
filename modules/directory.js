import * as os from 'os';
import * as fs from 'fs/promises';

import { sortCaseInsensitive } from './sort.js';

export class currentDirectory {
  constructor() {
    this.homeDirectory = os.homedir();
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
      console.log(e.message);
    }
  }
}
