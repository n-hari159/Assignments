const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How are you Today? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Your Response: ${answer}`);

  rl.close();
});