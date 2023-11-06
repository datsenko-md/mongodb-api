import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movie-routes.js';

const PORT = 3000;
const URL = 'mongodb://localhost:27017/moviebox';

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));
  
app.listen(PORT, (err) => console.log(err ?? `Listening port ${PORT}`));
