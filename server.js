import express from 'express';
import mongoose from 'mongoose';

import Movie from './models/Movie.js';

const PORT = 3000;
const URL = 'mongodb://localhost:27017/moviebox';

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));
 
const handleError = (res, error) => {
  res.status(500).json({ error });
};
  
app.listen(PORT, (err) => console.log(err ?? `Listening port ${PORT}`));


app.get('/movies', (req, res) => {
  Movie
    .find()
    .sort({ title: 1 })
    .then((movies) => {
      res
        .status(200)
        .json(movies);
    })
    .catch(() => handleError(res, 'Something goes wrong...'));
});

app.get('/movies/:id', (req, res) => {
  Movie
  .findById(req.params.id)
  .then((movie) => {
    res
      .status(200)
      .json(movie);
  })
  .catch(() => handleError(res, 'Something goes wrong...'));
});

app.delete('/movies/:id', (req, res) => {
    Movie
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, 'Something goes wrong...'));
});

app.post('/movies', (req, res) => {
  const movie = new Movie(req.body);
  movie
  .save()
  .then((result) => {
    res
      .status(201)
      .json(result);
  })
  .catch(() => handleError(res, 'Something goes wrong...'));
});

app.patch('/movies/:id', (req, res) => {
    Movie
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => handleError(res, 'Something goes wrong...'));
});