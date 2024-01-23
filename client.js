const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: LIM`);

    conn.on('data', (data) => {
      console.log(data);
    });
  });

  return conn;
};

module.exports = {connect};
