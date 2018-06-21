
import { selectBatsman, selectRunsScored, wicketTaken, playNextBatsman, updateScore } from './scoreActions';


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


describe('[Wicket taken Actions]', () => {
  it('Test Wicket taken Action', () => {
    const action = wicketTaken();

    expect(action.type).toEqual('WICKET');
  });
});

describe('[Play Next Batsman  Actions]', () => {
  it('Test Play next batsman Action', () => {
    const batsman = 'Player1.2';
    const action = playNextBatsman(batsman);

    expect(action.type).toEqual('PLAY_NEXT_BATSMAN');
    expect(action.payload).toEqual(batsman);
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
    const mockGetState = () => ({ currentOverDetails: { ballsRemaining: 0 } });

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
    });
  });
});
