import { GameAction } from '../actions'

const Game = (state = GameAction, action) => {
  switch (action.type) {
    case 'GAME_START':
      return action.type
    default:
      return state
  }
}

export default Game

