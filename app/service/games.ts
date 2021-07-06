import {CreateGameDTO} from '../model/dto/createGameDTO';
import {GamesModel} from "../model";

export class GamesService {
  constructor() {
  }

  /**
   * Create game
   * @param params
   */
  protected async createGame(params: CreateGameDTO): Promise<object> {
    try {
      const game = new GamesModel({
        player1Name: params.player1Name,
        player2Name: params.player2Name,
        player1Score: params.player1Score,
        player2Score: params.player2Score,
      });
      const result = await game.save();

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }


  /**
   * Find games
   */
  protected findGames() {
    return GamesModel.find(null, null, {sort: {'_id': -1}});
  }
}
