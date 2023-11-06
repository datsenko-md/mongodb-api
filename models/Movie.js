import mongoose from 'mongoose';

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genres: [String],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  reviews: [{
    name: String,
    text: String,
  }],
});

export const Movie = mongoose.model('Movie', movieSchema);
