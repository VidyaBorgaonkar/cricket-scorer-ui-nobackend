
import { updateScore, selectBatsman, selectRunsScored, wicketTaken, playNextBatsman } from './scoreActions';


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
