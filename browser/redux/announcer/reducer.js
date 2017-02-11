import { ANNOUNCE_KILL, REMOVE_ANNOUNCEMENT } from './constants';

const initialState = {
  killer: '',
  victim: ''
}

export const announcement = (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case ANNOUNCE_KILL:
      newState.killer = action.killer;
      newState.victim = action.victim;
      break;
    case REMOVE_ANNOUNCEMENT:
      return initialState;
    default:
      return state;
  }

  return newState;
}
