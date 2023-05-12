const { MongoClient } = require('mongodb');

const connectDatabase = async (collectionName) => {
    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log(`Database connected...`);
        const db = client.db('trainingDB');
        const collection = db.collection(collectionName);
        return collection
    } catch (error) {
        console.log(error)
        console.log('\nError when connect...');
    }
};

module.exports = connectDatabase;
