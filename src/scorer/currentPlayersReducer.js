import { NEXT_BALL, NEXT_OVER, PLAY_NEXT_BATSMAN, SELECT_BOWLER } from '../store/actionConstants';

export const initialCurrentPlayers = {
  batsmen: [],
  bowler: undefined,
};

const updateCurrentPlayers = (state = initialCurrentPlayers, action) => {
  switch (action.type) {
    case NEXT_BALL: {
      const data = action.payload;
      if (data.wicket) {
        return { ...state, batsmen: state.batsmen.filter(name => name !== data.batsman) };
      }
      return { ...state };
    }
    case PLAY_NEXT_BATSMAN:
      return { ...state, batsmen: [...state.batsmen, action.payload] };

    case NEXT_OVER: {
      return { ...state, bowler: undefined };
    }
    case SELECT_BOWLER: {
      return { ...state, bowler: action.bowlerName };
    }
    default:
      return state;
  }
};
export default updateCurrentPlayers;
