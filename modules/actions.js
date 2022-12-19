import { readFile as readFileByStream } from './files.js';

const commands = {
  ls: readDirectory,
  up: changeDirectoryToUp,
  cd: changeDirectoryToUp,
  cat: readFile,
};

export async function doCommand(command, directory) {
  try {
    const twoSymbolCommand = command.substring(0, 2);
    const threeSymbolCommand = command.substring(0, 3);

    if (commands[twoSymbolCommand])
      await commands[twoSymbolCommand](directory, command.substring(2).trim());
    else
      await commands[threeSymbolCommand](
        directory,
        command.substring(3).trim()
      );
  } catch {
    console.log('Invalid input');
  }
}

async function readDirectory(directory) {
  await directory.readDirectory();
}

async function changeDirectoryToUp(directory, path) {
  if (path) await directory.changeDirectory(path);
  else await directory.changeDirectory('..');
}

async function readFile(directory, filename) {
  if (!filename) throw Error;
  await readFileByStream(filename);
}
