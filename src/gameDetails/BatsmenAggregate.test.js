import getBatsmenAggregateStats from './BatsmenAggregation';

describe('BatsmenAggregation/getBatsmenAggregateStats', () => {
  it('should return empty array if empty array is passed as argument', () => {
    expect(getBatsmenAggregateStats([])).toEqual([]);
  });
  it('should return empty array if undefined is passed as argument', () => {
    expect(getBatsmenAggregateStats(undefined)).toEqual([]);
  });
  it('should return batsmen stats for a single run', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'BatsmanName', extras: [] }])).toEqual([{
      name: 'BatsmanName*',
      runs: 1,
      totalBalls: 1,
      fours: 0,
      sixes: 0,
      strikeRate: 100,
    }]);
  });
  it('should return batsmen stats for a 4 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 4, batsman: 'BatsmanName', extras: [] }])).toEqual([{
      name: 'BatsmanName*',
      runs: 4,
      totalBalls: 1,
      fours: 1,
      sixes: 0,
      strikeRate: 400,
    }]);
  });
  it('should return batsmen stats for a 6 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 6, batsman: 'BatsmanName', extras: [] }])).toEqual([{
      name: 'BatsmanName*',
      runs: 6,
      totalBalls: 1,
      fours: 0,
      sixes: 1,
      strikeRate: 600,
    }]);
  });
  it('should return batsmen stats for a strike rate as 66.67', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'BatsmanName', extras: [] },
      { runs: 0, batsman: 'BatsmanName', extras: [] },
      { runs: 1, batsman: 'BatsmanName', extras: [] }])).toEqual([{
      name: 'BatsmanName*',
      runs: 2,
      totalBalls: 3,
      fours: 0,
      sixes: 0,
      strikeRate: 66.67,
    }]);
  });
  it('should return batsmen totalBalls as zero for a wide', () => {
    expect(getBatsmenAggregateStats([{ runs: 0, extras: ['W'], batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName*',
      runs: 0,
      totalBalls: 0,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
    }]);
  });
  it('should return batsmen totalBalls as zero for a No-Ball', () => {
    expect(getBatsmenAggregateStats([{ runs: 0, extras: ['N'], batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName*',
      runs: 0,
      totalBalls: 0,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
    }]);
  });
  it('should return batsmen totalBalls as one and runs as zero for a byes', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, extras: ['B'], batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName*',
      runs: 0,
      totalBalls: 1,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
    }]);
  });
  it('should return batsmen totalBalls as one and runs as zero for a leg-byes', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, extras: ['LB'], batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName*',
      runs: 0,
      totalBalls: 1,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
    }]);
  });
});
