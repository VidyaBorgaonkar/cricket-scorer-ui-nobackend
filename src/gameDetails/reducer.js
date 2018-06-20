import { NEXT_BALL } from '../store/actionConstants';

const updateBallsBowled = (state = [], action) => {
  switch (action.type) {
    case NEXT_BALL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default updateBallsBowled;
