const commands = {};

export function doCommand(directory) {
  try {
    commands[directory]();
  } catch {
    return 'Invalid input';
  }
}
