import { NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED, SELECT_EXTRA } from '../store/actionConstants';

const initialcurrentBall = {
  batsman: '',
  runs: -1,
  extras: [],
};

const updateCurrentBall = (state = initialcurrentBall, action) => {
  switch (action.type) {
    case SELECT_BATSMAN: return { ...state, batsman: action.payload };
    case SELECT_RUNS_SCORED: return { ...state, runs: action.payload };
    case NEXT_BALL: return initialcurrentBall;
    case SELECT_EXTRA: {
      if (state.extras.includes(action.extra)) {
        return { ...state, extras: state.extras.filter(el => el !== action.extra) };
      }
      return { ...state, extras: [...state.extras, action.extra] };
    }
    default:
      return state;
  }
};
export default updateCurrentBall;
