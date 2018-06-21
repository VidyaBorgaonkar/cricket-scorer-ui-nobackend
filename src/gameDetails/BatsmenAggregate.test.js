import getBatsmenAggregateStats from './BatsmenAggregation';

describe('BatsmenAggregation/getBatsmenAggregateStats', () => {
  it('should return empty array if empty array is passed as argument', () => {
    expect(getBatsmenAggregateStats([])).toEqual([]);
  });
  it('should return empty array if undefined is passed as argument', () => {
    expect(getBatsmenAggregateStats(undefined)).toEqual([]);
  });
  it('should return batsmen stats for a single run', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName',
      runs: 1,
      totalBalls: 1,
      fours: 0,
      sixes: 0,
      strikeRate: 100,
    }]);
  });
  it('should return batsmen stats for a 4 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 4, batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName',
      runs: 4,
      totalBalls: 1,
      fours: 1,
      sixes: 0,
      strikeRate: 400,
    }]);
  });
  it('should return batsmen stats for a 6 runs', () => {
    expect(getBatsmenAggregateStats([{ runs: 6, batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName',
      runs: 6,
      totalBalls: 1,
      fours: 0,
      sixes: 1,
      strikeRate: 600,
    }]);
  });

  it('should return batsmen stats for a strike rate as ', () => {
    expect(getBatsmenAggregateStats([{ runs: 1, batsman: 'BatsmanName' }, { runs: 0, batsman: 'BatsmanName' }, { runs: 1, batsman: 'BatsmanName' }])).toEqual([{
      name: 'BatsmanName',
      runs: 2,
      totalBalls: 3,
      fours: 0,
      sixes: 0,
      strikeRate: 66.67,
    }]);
  });
});
