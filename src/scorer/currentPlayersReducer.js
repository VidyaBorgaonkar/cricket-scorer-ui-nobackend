import { NEXT_BALL, PLAY_NEXT_BATSMAN } from '../store/actionConstants';

const initialcurrentPlayers = {
  batsmen: ['Player1.1', 'Player1.2'],
  bowler: 'Player2.1',
};

const updateCurrentPlayers = (state = initialcurrentPlayers, action) => {
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
    default:
      return state;
  }
};
export default updateCurrentPlayers;
