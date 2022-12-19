const commands = { ls: readDirectory };

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
