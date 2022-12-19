const commands = { ls: readDirectory, up: changeDirectoryToUp };

export async function doCommand(command, directory) {
  try {
    if (command.indexOf('cd') === 0)
      await directory.changeDirectory(command.substring(2).trim());
    else await commands[command](directory);
  } catch {
    console.log('Invalid input');
  }
}

async function readDirectory(directory) {
  await directory.readDirectory();
}

async function changeDirectoryToUp(directory) {
  await directory.changeDirectory('..');
}
