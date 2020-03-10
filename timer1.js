const userInputs = process.argv.slice(2);

const numInputs = userInputs.map((x) => {
  return Number(x);
});

for (const numInput of numInputs) {
  if (numInput > 0 && !isNaN(numInput)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numInput * 1000);
  }
}

