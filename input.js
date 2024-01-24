const {KEY_BINDINGS, MESSAGES} = require('./constants')
let connection;

const sendMovement = (movement) => {
  connection.write(movement);
};

const handleUserMovement = (key) => {
  if (key === KEY_BINDINGS.MOVE_UP) {
    sendMovement(`Move: up`);
  } else if (key === KEY_BINDINGS.MOVE_LEFT) {
    sendMovement(`Move: left`);
  } else if (key === KEY_BINDINGS.MOVE_DOWN) {
    sendMovement(`Move: down`);
  } else if (key === KEY_BINDINGS.MOVE_RIGHT) {
    sendMovement(`Move: right`);
  }
};

const sendMessage = (key) => {
  const message = MESSAGES[key];
  if (message) {
    connection.write(`Say: ${message}`);
  }
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === KEY_BINDINGS.MOVE_UP || key === KEY_BINDINGS.MOVE_LEFT || key === KEY_BINDINGS.MOVE_DOWN || key === KEY_BINDINGS.MOVE_RIGHT) {
    handleUserMovement(key);
  } else if (MESSAGES[key]) {
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