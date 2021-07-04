import mongoose from 'mongoose';

export type GamesDocument = mongoose.Document & {
  player1Name: string,
  player2Name: string,
  player1Score: number,
  player2Score: number,
  createdAt: Date,
};

const gamesSchema = new mongoose.Schema({
  player1Name: String,
  player2Name: String,
  player1Score: Number,
  player2Score: Number,
  createdAt: { type: Date, default: Date.now },
});

export const GamesModel = (mongoose.models.games ||
mongoose.model<GamesDocument>('games', gamesSchema, process.env.DB_BOOKS_COLLECTION)
);
