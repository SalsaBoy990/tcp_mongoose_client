# tcp_mongoose_client - TCP Client and Server with MongoDB using Node.js and Mongoose

## Install MongoDB on your computer

*[Download the installer](https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl). I use this version: 

mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi
* Install it in a folder like this: `C:\mongodb`
* Create the following folders inside `C:\mongodb`: `data/db` and `log`
* Add `C:\mongodb\bin` to the PATH variable if needed, or go to the directory and 

run this command:

`mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log

\mongo.log --logappend --install`

* Run the service: `net start MongoDB`
* Run the shell application: `mongo`


## Setup our Node application in a folder


Create a package.json: `npm init`


Download required packages (save them locally):


* `npm i net --save`
* `npm i mongoose --save`

Start the server: `node server`

## Connect to the server and start the client

1. Start the server in command line: `node server`
2. Start the client in an other command line window: `node client`

## The client send a message through TCP in the following format in every five second: 

`{
`	"guid": "63d8da48­8ec8­4394­aa2b­e5d81132ddc6",
`	"datetime": "2014­10­01T13:51:50.417"
`}

If the input was correct, you will get the following response message:

`{
`	"status": "OK",
`	"error": null
`}

Otherwise, you will receive an error message

You can stop the server app with CTRL+c any time

## Check your input record in the Mongo database

* Start `mongo`
* `show dbs`
* `use nodefeladat`
* `show collections`
* `db.tcp.find().pretty()`

### Contact

András Gulácsi
guland@protonmail.com


