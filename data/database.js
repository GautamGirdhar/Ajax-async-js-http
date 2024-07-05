const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect('mongodb+srv://girdhargautam6:G%40ut%40m%4010122004@cluster0.i41grdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  database = client.db('blog');
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection not established!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};
