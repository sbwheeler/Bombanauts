import {
  SET_SCORE,
  SET_NAME
} from './constants';

const initialState = {
  score: 0,
  nickname: ''
}

export const ownInfo = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_NAME:
      newState.nickname = action.name;
      break;
    case SET_SCORE:
      newState.score = action.score;
      break;
    default:
      return state;
  }

  return newState
}
