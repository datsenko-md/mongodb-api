import express from 'express';

import {
  getMovies,
  getMovie,
  deleteMovie,
  addMovie,
  updateMovie,
} from '../controllers/movie-controller.js';

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', addMovie);
router.patch('/movies/:id', updateMovie);

export default router;