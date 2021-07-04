import { Context } from 'aws-lambda';
import { MessageUtil } from '../utils/message';
import { GamesService } from '../service/games';
import { CreateGameDTO } from '../model/dto/createGameDTO';

export class GamesController extends GamesService {
  constructor () {
    super();
  }

  /**
   * Create game
   * @param {*} event
   */
  async create (event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const params: CreateGameDTO = JSON.parse(event.body);

    try {
      const result = await this.createGame({
        player1Name: params.player1Name,
        player2Name: params.player2Name,
        player1Score: params.player1Score,
        player2Score: params.player2Score,
      });

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Find game list
   */
  async find () {
    try {
      const result = await this.findGames();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
