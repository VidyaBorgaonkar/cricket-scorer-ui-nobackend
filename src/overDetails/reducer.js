import { NEXT_BALL } from '../store/actionConstants';

export const initialState = { overDetails: [], ballsRemaining: 6 };

const updateCurrentOver = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_BALL: {
      const { runs, extras = [] } = action.payload;
      let currentBallDetails = '';

      let { ballsRemaining } = state;

      if (runs || extras.length === 0) {
        currentBallDetails += runs;
      }

      if (extras.length !== 0) {
        currentBallDetails += extras;
      }

      if (extras.indexOf('W') === -1 && extras.indexOf('N') === -1) {
        ballsRemaining -= 1;
      }
      if (ballsRemaining <= 0) return initialState;

      return { overDetails: [...state.overDetails, currentBallDetails], ballsRemaining };
    }
    default:
      return state;
  }
};
export default updateCurrentOver;