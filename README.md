# tcp_mongoose - TCP Server with MongoDB using Node.js and Mongoose

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

## Download Netcat, connect to our server

* [Windows version](https://joncraton.org/blog/46/netcat-for-windows/)
* [Linux](https://www.unixmen.com/play-with-netcat-in-ubuntu/)

On Windows add nc.exe to the global PATH variable then you can use it everywhere.

Connect to the server: `nc localhost 5000` where the 5000 is our port number


## The client should send a message through TCP in the following format: 

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

## Check your input record in the Mongo database

* Start `mongo`
* `show dbs`
* `use nodefeladat`
* `show collections`
* `db.tcp.find().pretty()`

### Contact

András Gulácsi
guland@protonmail.com


