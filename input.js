const {KEY_BINDINGS, MESSAGES} = require('./constants');

// initializes a variable to connect to the server
let connection;

// send the movement key that the user presses to the server
const sendMovement = (movement) => {
  connection.write(movement);
};

// key bindings
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

// messages bindings
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

// we take the conn as a parameter so we can connect to the server
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