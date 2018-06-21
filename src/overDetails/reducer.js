import { NEXT_BALL, NEXT_OVER } from '../store/actionConstants';

export const initialState = { overDetails: [], ballsRemaining: 6 };

const updateCurrentOver = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_BALL: {
      const { runs, extras = [], wicket } = action.payload;
      let currentBallDetails = '';

      let { ballsRemaining } = state;

      if (runs || extras.length === 0) {
        currentBallDetails += runs;
      }

      if (extras.length !== 0) {
        currentBallDetails += extras;
      }

      if (wicket) {
        currentBallDetails += '(W)';
      }
      if (extras.indexOf('W') === -1 && extras.indexOf('N') === -1) {
        ballsRemaining -= 1;
      }

      return { overDetails: [...state.overDetails, currentBallDetails], ballsRemaining };
    }
    case NEXT_OVER: {
      return initialState;
    }
    default:
      return state;
  }
};
export default updateCurrentOver;
