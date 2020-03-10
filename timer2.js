const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Type a number from 1 to 9 or type b to beep");

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (!isNaN(Number(key))) {
    const numKey = Number(key);
    if (numKey > 0 && numKey < 10) {
      console.log(`setting timer for ${numKey} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numKey * 1000);
    }
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});
