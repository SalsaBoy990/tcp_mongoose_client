// MongoDB database
const mongoose = require('mongoose')

// Connect to database
mongoose.connect('mongodb://localhost/nodefeladat')

// Create the schema
let TCPSchema = mongoose.Schema({
  guid: { type: String, required: true },
  datetime: { type: Date, required: true, default: new Date() }
}, { collection: 'tcp' })

// Create the model
let TCPModel = mongoose.model('TCPModel', TCPSchema)

module.exports = {
  TCPModel: TCPModel
}
