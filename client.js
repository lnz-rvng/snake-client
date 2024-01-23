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
    
    setTimeout(() => {
      conn.write(`Move: up`);
      setTimeout(() => {
        conn.write(`Move: up`);
        setTimeout(() => {
          conn.write(`Move: up`);
          setTimeout(() => {
            conn.write(`Move: left`);
            setTimeout(() => {
              conn.write(`Move: left`);
              setTimeout(() => {
                conn.write(`Move: left`);
                setTimeout(() => {
                  conn.write(`Move: up`);
                  setTimeout(() => {
                    conn.write(`Move: up`);
                    setTimeout(() => {
                      conn.write(`Move: up`);
                      setTimeout(() => {
                        conn.write(`Move: right`);
                        setTimeout(() => {
                          conn.write(`Move: right`);
                          setTimeout(() => {
                            conn.write(`Move: right`);
                            setTimeout(() => {
                              conn.write(`Move: down`);
                              setTimeout(() => {
                                conn.write(`Move: down`);
                                setTimeout(() => {
                                  conn.write(`Move: down`);
                                  setTimeout(() => {
                                    conn.write(`Move: down`);
                                    }, 200)
                                  }, 200)
                                }, 200)
                              }, 200)
                            }, 200)
                          }, 200)
                       }, 200)
                     }, 200)
                    }, 200)
                  }, 200)
                }, 200)
              }, 200)
            }, 200)
          }, 200)
        }, 200)
      }, 200)
 
    conn.on('data', (data) => {
      console.log(data);
    });
  });
  
  
  return conn;
};

module.exports = {connect};
