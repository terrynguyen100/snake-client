const net = require('net');

//establish a connection with a game server

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  //interpret incoming data as text
  conn.setEncoding('utf-8');
  //for when the connection is first made
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: TER');
  });

  // listening for an show message from the server
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

 module.exports = connect;