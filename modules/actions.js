const commands = {
  ls: readDirectory,
  up: changeDirectoryToUp,
  cd: changeDirectoryToUp,
};

export async function doCommand(command, directory) {
  try {
    const twoSymbolCommand = command.substring(0, 2);
    const threeSymbolCommand = command.substring(0, 3);

    await commands[twoSymbolCommand](directory, command.substring(2).trim());
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
