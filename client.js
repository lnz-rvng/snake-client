const net = require('net');
const {NETWORK} = require('./constants');
const connect = () => {
  const conn = net.createConnection({
    host: NETWORK.IP,
    port: NETWORK.PORT
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: Lance`)

    conn.on('data', (data) => {
      console.log(data);
    });
  });
  
  
  return conn;
};

module.exports = {
  connect
};
