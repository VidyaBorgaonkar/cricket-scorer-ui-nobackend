import { playNextBatsman, wicketTaken } from '../nextBatsman/actions';

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
