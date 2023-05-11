const connect = require('./client');

console.log('Connecting...');
const conn = connect();

//for when the connection is first made
conn.on('connect', () => {
  console.log('Successfully connected to game server!');
  conn.write('Name: TER');
});

// listening for an show message from the server
conn.on('data', (data) => {
  console.log(data);
});
