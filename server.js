// Server used for tcp communication
const net = require('net');
// Our database model
const TCPModel = require('./mongoose').TCPModel;
// Server listens on port
const port = 5000;
const address = '127.0.0.1';

// This function handles the client-server communication
const handleConnection = (socket) => {
  // Instructions for the user
  socket.write('\nHello user!\n');
  socket.write('\nAdd a message in the following format:\n');
  socket.write('{ "guid": "cac5afd610a743ea8594ac19b2c130ee", "datetime": "2018-01-22T11:43:39.145Z" }\n');
  socket.write('\nYour message: ');
  
  // Send error message to back to the user
  socket.on('error', (err) => {
    socket.end(err.stack);
  });

  // Gets the data from the client
  socket.on('data', (data) => {
    // Parse input from JSON, data is a Buffer, it has to be converted to string first!
    let input = JSON.parse(data.toString());
    console.log(input);

    // Save our recod in the Mongo database ( db: 'nodefeladat', collection: 'tcp' )
    const entry = new TCPModel(input)
      .save((err) => {
        // If an error occurs, an error message is sent
        if (err) {
          socket.end(err);
          console.error(err);
        }
        reply = {
          status: 'OK',
          error: null
        }
        // Returns a success message to the client and ends connection
        socket.end(JSON.stringify(reply));
        console.log(reply);
      });
  });
};

// Server instance for TCP communication
const server = net.createServer(handleConnection);

// Start the server
server.listen(port, () => {
  console.log(`Server is listening at ${address}:${port}`);
});
