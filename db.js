import { MongoClient } from 'mongodb';

const URL = 'mongodb://localhost:27017/moviebox';

let dbConnection;

export const connectToDb = (cb) => {
  MongoClient
  .connect(URL)
  .then((client) => {
    console.log('Connected to MongoDB')
    dbConnection = client.db();
    return cb();
  }).catch((err) => {
    return cb(err)
  });
};

export const getDB = () => dbConnection;
