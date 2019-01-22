const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
//use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
 if(err) return process.exit(1)
 console.log('Connectionis okay')
//perform queries

 insertDocuments(db,()=>{
db.close()

 })
})

//insert documents
const insertDocuments = (db, callback) => {
    //get reference to edx-course-docs collection
    const collection = db.collection('edx-course-students')
    //insert 3 documents
    collection.insert([
        {name : 'Bob'}, {name : 'Jhon'},{name:'Peter'}//3documents
    ],(error, result)=>{
        if (error) return process.exit(1)
        console.log(result.result.n)//will be 3
        console.log(result.ops.length)//wil be 3
        console.log('Inserted 3 documents into edx-course-students collection')
        callback(result)
        
    })
}