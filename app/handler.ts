
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { GamesController } from './controller/games';
const booksController = new GamesController();

export const createGame: Handler = (event: any, context: Context) => {
  return booksController.create(event, context);
};

export const findAllGames: Handler = () => booksController.find();
