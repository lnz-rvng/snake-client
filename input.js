let connection;

const sendMovement = (movement) => {
  connection.write(movement);
}
const handleUserMovement = (key) => {
  if (key === 'w') {
    sendMovement(`Move: up`);
  } else if (key === 'a') {
    sendMovement(`Move: left`);
  } else if (key === 's') {
    sendMovement(`Move: down`);
  } else if (key === 'd') {
    sendMovement(`Move: right`);
  }
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    handleUserMovement(key);
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};