export const parseArgs = () => {
  let args = {};

  for (let i = 2; i < process.argv.length; i++) {
    let argSplit = process.argv[i].split('=');

    const command =
      argSplit[0].indexOf('--') === 0 ? argSplit[0].substring(2) : argSplit[0];

    args[command] = argSplit[1];
  }

  return args;
};
