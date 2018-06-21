import { NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED, WICKET, SELECT_EXTRA } from '../store/actionConstants';

const initialcurrentBall = {
  batsman: '',
  runs: undefined,
  extras: [],
  wicket: false,
};

const updateCurrentBall = (state = initialcurrentBall, action) => {
  switch (action.type) {
    case SELECT_BATSMAN: return { ...state, batsman: action.payload };
    case SELECT_RUNS_SCORED: return { ...state, runs: action.payload };
    case SELECT_EXTRA: {
      if (state.extras.includes(action.extra)) {
        return { ...state, extras: state.extras.filter(el => el !== action.extra) };
      }
      return { ...state, extras: [...state.extras, action.extra] };
    }
    case WICKET:
      return { ...state, wicket: !state.wicket };
    case NEXT_BALL:
      return initialcurrentBall;
    default:
      return state;
  }
};
export default updateCurrentBall;
