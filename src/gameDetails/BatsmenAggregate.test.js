import getBatsmenAggregateStats from './BatsmenAggregation';

const initialCurrentPlayers = {
  batsmen: ['Player1.1', 'Player1.2'],
  bowler: 'Player2.1',
};

describe('BatsmenAggregation/getBatsmenAggregateStats', () => {
  it('should return empty array if empty array is passed as argument', () => {
    expect(getBatsmenAggregateStats([], initialCurrentPlayers.batsmen)).toEqual([]);
  });
  it('should return empty array if undefined is passed as argument', () => {
    expect(getBatsmenAggregateStats(undefined, initialCurrentPlayers.batsmen)).toEqual([]);
  });
  it('should return batsmen stats for a single run', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'Player1.1', extras: [] }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 1, sixes: 0, strikeRate: 100, totalBalls: 1,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen stats for a 4 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 4, batsman: 'Player1.1', extras: [] }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 1, name: 'Player1.1*', runs: 4, sixes: 0, strikeRate: 400, totalBalls: 1,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen stats for a 6 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 6, batsman: 'Player1.1', extras: [] }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 6, sixes: 1, strikeRate: 600, totalBalls: 1,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen stats for a strike rate as 66.67', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'Player1.1', extras: [] },
      { runs: 0, batsman: 'Player1.1', extras: [] },
      { runs: 1, batsman: 'Player1.1', extras: [] }], initialCurrentPlayers)).toEqual([{
      fours: 0, name: 'undefined*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
    }, {
      fours: 0, name: 'undefined*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
    }, {
      fours: 0, name: 'Player1.1*', runs: 2, sixes: 0, strikeRate: 66.67, totalBalls: 3,
    }]);
  });
  it('should return batsmen totalBalls as zero for a wide', () => {
    expect(getBatsmenAggregateStats([{ runs: 0, extras: ['W'], batsman: 'Player1.1' }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen totalBalls as zero for a No-Ball', () => {
    expect(getBatsmenAggregateStats([{ runs: 0, extras: ['N'], batsman: 'Player1.1' }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen totalBalls as one and runs as zero for a byes', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, extras: ['B'], batsman: 'Player1.1' }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 1,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
  it('should return batsmen totalBalls as one and runs as zero for a leg-byes', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, extras: ['LB'], batsman: 'Player1.1' }], initialCurrentPlayers.batsmen))
      .toEqual([{
        fours: 0, name: 'Player1.1*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 1,
      }, {
        fours: 0, name: 'Player1.2*', runs: 0, sixes: 0, strikeRate: 0, totalBalls: 0,
      }]);
  });
});
