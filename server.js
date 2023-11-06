import express from 'express';

import { connectToDb, getDB } from './db.js';
const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => console.log(err ?? `Listening port ${PORT}`));
    db = getDB();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});
