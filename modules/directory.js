import * as os from 'os';

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
}
