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

app.get('/movies', (req, res) => {
  const movies = [];
  db
    .collection('movies')
    .find()
    .sort({ title: 1 })
    .forEach((movie) => movies.push(movie))
    .then(() => {
      res
        .status(200)
        .json(movies);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'Something went wrong...' });
    });
});
