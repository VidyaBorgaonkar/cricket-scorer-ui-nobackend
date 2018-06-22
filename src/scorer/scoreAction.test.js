import { selectBatsman, selectRunsScored, updateScore } from './scoreActions';


describe('[Select Batsman Actions]', () => {
  it('Test Select Batsman Action', () => {
    const batsmanName = 'player1';
    const action = selectBatsman(batsmanName);

    expect(action.type).toEqual('SELECT_BATSMAN');
    expect(action.payload).toEqual('player1');
  });
});

describe('[Select Runs Scored Actions]', () => {
  it('Test Select Runs Scored Action', () => {
    const runs = 4;
    const action = selectRunsScored(runs);

    expect(action.type).toEqual('SELECT_RUNS_SCORED');
    expect(action.payload).toEqual(4);
  });
});


describe('[Select Next Ball Actions]', () => {
  it('Test Next Ball Action', () => {
    const data = {
      batsmen: ['player1', 'player2'],
      bowler: 'player3',
      selectedBatsman: 'player2',
      selectedRuns: 5,
      over: 1.1,
    };
    const actionFn = updateScore(data);

    const mockDispatch = jest.fn();
    const mockGetState = () => ({ currentOverDetails: { ballsRemaining: 6 } });

    actionFn(mockDispatch, mockGetState);
    expect(mockDispatch.mock.calls.length).toBe(1);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'NEXT_BALL',
      payload: {
        batsman: 'player2',
        bowler: 'player3',
        runs: 5,
        currentOver: 1,
      },
    });
  });

  it('Next ball action should dispatch a NEXT_OVER action when ballsRemaining in currentOver reaches 0', () => {
    const data = {
      batsmen: ['player1', 'player2'],
      bowler: 'player3',
      selectedBatsman: 'player2',
      selectedRuns: 5,
      over: 1.1,
    };
    const actionFn = updateScore(data);

    const mockDispatch = jest.fn();
    const mockGetState = () =>
      ({ currentOverDetails: { ballsRemaining: 0 }, gameInformation: { numberOfOvers: 1 } });

    actionFn(mockDispatch, mockGetState);
    expect(mockDispatch.mock.calls.length).toBe(2);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'NEXT_BALL',
      payload: {
        batsman: 'player2',
        bowler: 'player3',
        runs: 5,
        currentOver: 1,
      },
    });

    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: 'NEXT_OVER',
      currentOver: 1,
      totalNoOfOvers: 1,
    });
  });
});
// TODO fix later
// describe('[Select Next Ball Actions]', () => {
//   it('Test Next Ball Action', () => {
//     const data = {
//       batsmen: ['player1', 'player2'],
//       bowler: 'player3',
//       selectedBatsman: 'player2',
//       selectedRuns: 5,
//     };
//     const action = updateScore(data);
//
//     //action(jest.mock())
//
//     expect(action.type).toEqual('NEXT_BALL');
//     expect(action.payload).toEqual({
//       batsman: 'player2',
//       bowler: 'player3',
//       runs: 5,
//     });
//   });
// });
