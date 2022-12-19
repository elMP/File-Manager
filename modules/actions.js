const commands = { ls: readDirectory, up: changeDirectory };

export async function doCommand(command, directory) {
  try {
    await commands[command](directory);
  } catch {
    console.log('Invalid input');
  }
}

async function readDirectory(directory) {
  await directory.readDirectory();
}

async function changeDirectory(directory) {
  await directory.changeDirectory('..');
}
