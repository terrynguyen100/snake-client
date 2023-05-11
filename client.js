const net = require('net');

//establish a connection with a game server

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  //interpret incoming data as text
  conn.setEncoding('utf-8');

  return conn;
}

 module.exports = connect;