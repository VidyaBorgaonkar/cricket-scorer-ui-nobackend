import reducer from './reducer';
import { INNINGS_OVER, NEXT_BALL, NEXT_OVER } from '../store/actionConstants';


const updateScore = (runs = 0, extras = [], wicket = false) => ({
  type: NEXT_BALL,
  payload: {
    runs, extras, wicket,
  },
});

describe('gameInformation/reducer', () => {
  it('should return initial state of current over', () => {
    const initialState = { ballsRemaining: 6, overDetails: [] };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should append the current ball runs to the current over', () => {
    const expectedState = { overDetails: ['1'], ballsRemaining: 5 };
    expect(reducer(undefined, updateScore(1))).toEqual(expectedState);
  });

  it('should append the current ball runs to the current over with runs 0', () => {
    const expectedState = { overDetails: ['0'], ballsRemaining: 5 };
    expect(reducer(undefined, updateScore(0))).toEqual(expectedState);
  });

  it('should not change ballsRemaining if extra is Wide', () => {
    const expectedState = { overDetails: ['1W'], ballsRemaining: 6 };
    expect(reducer(undefined, updateScore(1, ['W']))).toEqual(expectedState);
  });

  it('should append the current ball extras to the current over', () => {
    const expectedState = { overDetails: ['B'], ballsRemaining: 5 };
    expect(reducer(undefined, updateScore(undefined, ['B']))).toEqual(expectedState);
  });

  it('should append the current ball runs & extras to the current over', () => {
    const expectedState = { overDetails: ['1B'], ballsRemaining: 5 };
    expect(reducer(undefined, updateScore(1, ['B']))).toEqual(expectedState);
  });

  it('should append the current ball runs & extras to the current over', () => {
    const expectedState = { overDetails: ['1N'], ballsRemaining: 6 };
    expect(reducer(undefined, updateScore(1, ['N']))).toEqual(expectedState);
  });

  it('should reset the state to initialState after an over', () => {
    const initialState = { ballsRemaining: 6, overDetails: [] };


    let state = reducer(undefined, updateScore(1));
    state = reducer(state, updateScore(1));
    state = reducer(state, updateScore(1));
    state = reducer(state, updateScore(1));
    state = reducer(state, updateScore(1));
    state = reducer(state, updateScore(1));
    state = reducer(state, { type: NEXT_OVER, currentOver: 0 });

    expect(state).toEqual(initialState);
  });

  it('should reset the state to initialState after INNINGS_OVER', () => {
    const initialState = { ballsRemaining: 6, overDetails: [] };


    let state = reducer(undefined, updateScore(1));
    state = reducer(state, { type: INNINGS_OVER });

    expect(state).toEqual(initialState);
  });
});

