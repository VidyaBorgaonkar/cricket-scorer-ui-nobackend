import { updateScore, selectBatsman, selectRunsScored } from './scoreActions';

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
    };
    const action = updateScore(data);

    expect(action.type).toEqual('NEXT_BALL');
    expect(action.payload).toEqual({
      batsman: 'player2',
      bowler: 'player3',
      runs: 5,
    });
  });
});
