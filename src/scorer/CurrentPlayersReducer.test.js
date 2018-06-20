import updateCurrentPlayers from './currentPlayersReducer';

describe('updateCurrentPlayersOnLoad', () => {
  it('should return initial state when loading DOM ', () => {
    const action = { };
    const newState = {
      batsmen: ['Player1.1', 'Player1.2'],
      bowler: 'Player2.1',
    };


    expect(updateCurrentPlayers(undefined, action)).toEqual(newState);
  });
});

