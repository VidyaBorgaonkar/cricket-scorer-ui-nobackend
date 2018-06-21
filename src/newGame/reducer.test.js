import reducer from './reducer';
import { updateTeamNameAction } from './teamNameSelector/TeamNameSelector';

describe('gameInformation/reducer', () => {
  it('should return initial state of 11 players in each team', () => {
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
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update the team Name when UPDATE_TEAM_NAME is triggered', () => {
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
      names: ['UPDATED_TEAM_NAME', 'team2'],
    };
    expect(reducer(undefined, updateTeamNameAction(0, 'UPDATED_TEAM_NAME'))).toEqual(initialState);
  });
});
