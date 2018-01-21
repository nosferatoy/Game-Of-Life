
import { toggleSquare } from '../actions'

const boardSquares = (state = {num: 1}, action) => {
console.log('action : ', action)
  
  switch (action.type) {
    case 'TOGGLE_SQUARE':
      state.num = 2;
    case 'START_GAME':
      state.num = 4;
    case 'STOP_GAME':
      state.num = 5;
    case 'RESET_GAME':
      state.num = 6;
   return state
    default:
      return state
  }
}

export default boardSquares;