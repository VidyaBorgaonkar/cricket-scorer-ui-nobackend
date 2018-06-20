import { NEXT_BALL } from '../store/actionConstants';

export const updateBallsBowled = (state = [], action) => {
  switch (action.type) {
    case NEXT_BALL:
      return [...state, action.payload];
    default:
      return state;
  }
};
