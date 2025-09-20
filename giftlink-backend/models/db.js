// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      
    try {
        // Connect the client to the server
        await client.connect();        
        dbInstance = client.db(dbName);
        return client.db();
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        // Exit the process or handle the error gracefully
        process.exit(1); 
    }
}

module.exports = connectToDatabase;
