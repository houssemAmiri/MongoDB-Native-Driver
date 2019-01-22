const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
//use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
 if(err) return process.exit(1)
 console.log('Kudos. Connected successfully to server')
//perform queries
db.close()
})
