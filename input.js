const {moves, messages} = require('./constants')
let connection;

const sendMovement = (movement) => {
  connection.write(movement);
};

const handleUserMovement = (key) => {
  if (key === moves.MOVE_UP) {
    sendMovement(`Move: up`);
  } else if (key === moves.MOVE_LEFT) {
    sendMovement(`Move: left`);
  } else if (key === moves.MOVE_DOWN) {
    sendMovement(`Move: down`);
  } else if (key === moves.MOVE_RIGHT) {
    sendMovement(`Move: right`);
  }
};

const sendMessage = (key) => {
  if (key === 'z') {
    connection.write(`Say: ${messages.z}`);
  } else if (key === 'x') {
    connection.write(`Say: ${messages.x}`);
  } else if (key === 'c') {
    connection.write(`Say: ${messages.c}`);
  }
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === moves.MOVE_UP || key === moves.MOVE_LEFT || key === moves.MOVE_DOWN || key === moves.MOVE_RIGHT) {
    handleUserMovement(key);
  } else if (key === 'z' || key === 'x' || key === 'c') {
    sendMessage(key);
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