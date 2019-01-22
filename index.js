
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

//updating documents
const updateDocument = (db, callback) => {
    // Get the edx-course-students collection
    var collection = db.collection('edx-course-students')
    // Update document where a is 2, set b equal to 1
    const name = 'Peter'
    collection.update({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 1
        console.log(`Updated the student document where name = ${name}`)
        callback(result)
    })
  }
  
  //removing documents
  const removeDocument = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('edx-course-students')
    // Insert some documents
    const name = 'Bob'
    collection.remove({ name : name }, (error, result) => {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Removed the document where name = ${name}`)
      callback(result)
    })
  }
  //finding documents
  var findDocuments = (db, callback) => {
    // Get the documents collection
    var collection = db.collection('edx-course-students')
    // Find some documents
    collection.find({}).toArray((error, docs) => {
      if (error) return process.exit(1)
      console.log(2, docs.length) // will be 2 because we removed one document
      console.log(`Found the following documents:`)
      console.dir(docs)
      callback(docs)
    })
  }


const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        findDocuments(db, () => {
          db.close()
        })
      })
    })
  })
})