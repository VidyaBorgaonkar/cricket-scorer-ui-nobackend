import updateCurrentPlayers from './currentPlayersReducer';
import { NEXT_BALL, PLAY_NEXT_BATSMAN } from '../store/actionConstants';

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

describe('currentPlayersReducerOnNextBallOutAction', () => {
  it('should remove batsman on next ball Action with Out', () => {
    const state = { batsmen: ['player1', 'player2'], bowler: 'player2.1' };
    const action = {
      type: NEXT_BALL,
      payload: {
        batsman: 'player1',
        bowler: 'player2.1',
        runs: 1,
        extras: [],
        wicket: true,
        currentOver: 0,
      },
    };
    const newState = {
      batsmen: ['player2'],
      bowler: 'player2.1',

    };


    expect(updateCurrentPlayers(state, action)).toEqual(newState);
  });
});


describe('currentPlayersReducerOnPlayNextBatsmanAction', () => {
  it('should return next batsman on play next batsman Action', () => {
    const state = {
      batsmen: ['Player1.1'],
      bowler: 'Player2.1',
    };
    const action = {
      type: PLAY_NEXT_BATSMAN,
      payload: 'Player1.3',
    };
    const newState = {
      batsmen: ['Player1.1', 'Player1.3'],
      bowler: 'Player2.1',
    };


    expect(updateCurrentPlayers(state, action)).toEqual(newState);
  });
});

