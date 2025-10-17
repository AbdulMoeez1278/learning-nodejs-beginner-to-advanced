// MongoDB Commands Reference
// This file contains commonly used MongoDB commands for database operations.

// Connect to MongoDB
// mongo "mongodb+srv://cluster0.example.mongodb.net/myFirstDatabase" --username myUsername

// Show all databases
// show dbs
// use <database_name>

// Show current database
// db.getName()

// Show collections in the current database
// show collections
// db.<collection_name>.find().pretty()

// Insert a document into a collection
// db.<collection_name>.insertOne({ key: "value", key2: "value2" })
// db.<collection_name>.insertMany([{ key: "value1" }, { key: "value2" }])

// Find documents in a collection
// db.<collection_name>.find({ key: "value" }).pretty()
// db.<collection_name>.findOne({ key: "value" })
// db.<collection_name>.find().limit(5).pretty()

// Update documents in a collection
// db.<collection_name>.updateOne({ key: "value" }, { $set: { key2: "new_value" } })
// db.<collection_name>.updateMany({ key: "value" }, { $set: { key2: "new_value" } })

// Delete documents from a collection
// db.<collection_name>.deleteOne({ key: "value" })
// db.<collection_name>.deleteMany({ key: "value" })
// db.<collection_name>.remove({}) // Deletes all documents in the collection

// Drop a collection
// db.<collection_name>.drop()

// Drop the current database
// db.dropDatabase()

// Exit MongoDB shell
// exit

// Note: Replace <database_name> and <collection_name> with actual names when using the commands.

// This reference is intended for quick access to common MongoDB operations during development.
