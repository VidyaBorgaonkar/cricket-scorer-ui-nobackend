import { UPDATE_TEAM_NAME } from '../store/actionConstants';

const initialState = {
  team1: ['Player1.1',
    'Player1.2',
    'Player1.3',
    'Player1.4',
    'Player1.5',
    'Player1.6',
    'Player1.7',
    'Player1.8',
    'Player1.9',
    'Player1.10',
    'Player1.11'],
  team2: ['Player2.1',
    'Player2.2',
    'Player2.3',
    'Player2.4',
    'Player2.5',
    'Player2.6',
    'Player2.7',
    'Player2.8',
    'Player2.9',
    'Player2.10',
    'Player2.11'],
  numberOfOvers: 5,
  names: ['team1', 'team2'],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEAM_NAME: {
      return {
        ...state,
        names: Object.assign([...state.names], { [action.index]: action.teamName }),
      };
    }
    default: return state;
  }
};

export default reducer;
