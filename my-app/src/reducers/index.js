import { combineReducers } from 'redux'
import generateInput from './generateInput'
import game from './game'

export default combineReducers({
  generateInput,
  game
})
