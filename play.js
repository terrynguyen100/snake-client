const connect = require('./client');

console.log('Connecting...');
const conn = connect();

//for when the connection is first made
conn.on('connect', () => {
  console.log('Successfully connected to game server!');
  conn.write('Name: TER');
  //conn.write('Move: up');
});

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
// \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
}
};


setupInput();
// listening for an show message from the server
conn.on('data', (data) => {
  console.log(data);
});
