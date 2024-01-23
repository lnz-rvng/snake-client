const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log(`You connected to the game`);

    conn.on('data', (data) => {
      console.log(data);
    });
  });

  return conn;
};

module.exports = {connect};
