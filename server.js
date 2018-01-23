// Server used for tcp communication
const net = require('net')
// Our database model
const TCPModel = require('./mongoose').TCPModel
// Server listens on port
const port = 5000
const address = '127.0.0.1'

// This function handles the client-server communication
const handleConnection = (client) => {
  client.setEncoding('utf8')

  // Send error message to back to the user
  client.on('error', (err) => {
    client.end(err.stack)
  })

  // Gets the data from the client
  client.on('data', (data) => {
    // Parse input from JSON, data is a Buffer, it has to be converted to string first!
    let input = JSON.parse(data.toString())
    console.log(input)

    // Save our record in the Mongo database ( db: 'nodefeladat', collection: 'tcp' )
    new TCPModel(input)
      .save((err) => {
        // If an error occurs, an error message is sent
        if (err) {
          client.end(err)
          console.error(err)
        }
        let reply = {
          status: 'OK',
          error: null
        }
        // Returns a success message to the client and ends connection
        client.write(JSON.stringify(reply))
        console.log(reply)
      })
  })
}

// Server instance for TCP communication
const server = net.createServer(handleConnection)

// Start the server
server.listen(port, () => {
  console.log(`Server is listening at ${address}:${port}`)
})
