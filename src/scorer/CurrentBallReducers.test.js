import updateCurrentBall from './currentBallReducer';
import { NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED } from '../store/actionConstants';

describe('currentBallReducerOnLoad', () => {
  it('should return initial state when loading DOM ', () => {
    const action = { };
    const newState = {
      batsman: '',
      extras: [],
      runs: -1,
    };


    expect(updateCurrentBall(undefined, action)).toEqual(newState);
  });
});


describe('currentBallReducerOnNewBallAction', () => {
  it('should return initial state for new ball action', () => {
    const state = {};
    const action = {
      type: NEXT_BALL,
      payload: { batsman: 'name', runs: 6, bowler: 'name2' },
    };
    const newState = {
      batsman: '',
      extras: [],
      runs: -1,
    };


    expect(updateCurrentBall(state, action)).toEqual(newState);
  });
});


describe('currentBallReducerOnSelectBatsmanAction', () => {
  it('should update batsman name for SelectBatsmanAction', () => {
    const state = { batsman: 'player1', runs: 2 };
    const action = {
      type: SELECT_BATSMAN,
      payload: 'player2',
    };
    const newState = {
      batsman: 'player2',
      runs: 2,
    };


    expect(updateCurrentBall(state, action)).toEqual(newState);
  });
});


describe('currentBallReducerOnSelectRunsScoredAction', () => {
  it('should return update runsScored for SelectRunsScoredAction', () => {
    const state = { batsman: 'player1', runs: 2 };
    const action = {
      type: SELECT_RUNS_SCORED,
      payload: 6,
    };
    const newState = {
      batsman: 'player1',
      runs: 6,
    };


    expect(updateCurrentBall(state, action)).toEqual(newState);
  });
});
