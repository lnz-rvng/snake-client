const net = require('net');
const {NETWORK} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: NETWORK.IP,
    port: NETWORK.PORT
  });

  // set the encoding to utf8
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    // displays in the client terminal when they join the server
    console.log(`Successfully connected to game server`);
    conn.write(`Name: Lance`);

    conn.on('data', (data) => {
      console.log(data);
    });
  });
  
  
  return conn;
};

module.exports = {
  connect
};
