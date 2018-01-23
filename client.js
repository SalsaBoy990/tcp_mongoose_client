const net = require('net')
// To generate unique GUID
const uuidv4 = require('uuid/v4')

// Callback function for the setInterval()
const cb = () => {
  return function () {
    let myRequest = {
      guid: uuidv4(),
      datetime: new Date()
    }
    console.log(myRequest)
    // Send request for the server to put it into the Mongo database
    client.write(JSON.stringify(myRequest))
  }
}

// Connect client to the TCP server running
const client = new net.Socket()
client.connect(5000, '127.0.0.1', function () {
  console.log('Connected to the TCP server!')
  // Send a request in every 5 seconds
  setInterval(cb(), 5000)
})
