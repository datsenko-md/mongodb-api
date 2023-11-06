import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movie-routes.js';

const PORT = 3000;
const URL = 'mongodb+srv://<user>:<password>@cluster0.gang369.mongodb.net/moviebox?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));
  
app.listen(PORT, (err) => console.log(err ?? `Listening port ${PORT}`));
