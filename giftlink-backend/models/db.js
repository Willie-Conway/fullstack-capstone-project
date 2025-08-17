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
     

    // Task 1: Connect to MongoDB
    // {{insert code}}
    const client = new MongoClient(url);

    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}
    await client.connect();
    dbInstance = client.db(dbName);

    // Task 3: Return database instance
    // {{insert code}}
    return dbInstance;
}

module.exports = connectToDatabase;
