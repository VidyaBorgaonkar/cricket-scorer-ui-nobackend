import getBowlersAggregateStats from './BowlerAggregation';

describe('getBowlersAggregateStats', () => {
  it('should return empty bowlers array if undefined is passed as an argument', () => {
    expect(getBowlersAggregateStats(undefined)).toEqual([]);
  });
  it('should return empty bowlers array if empty array is passed as an argument', () => {
    expect(getBowlersAggregateStats([])).toEqual([]);
  });
  it('should return bowler stats for a single ball bowled', () => {
    expect(getBowlersAggregateStats([{ runs: 1, bowler: 'Bowlername' }])).toEqual([{
      name: 'Bowlername',
      balls: 1,
      overs: 0.1,
      maidens: 0,
      runs: 1,
      ballByBallRuns: [1],
      wickets: 0,
    }]);
  });
  it('should return bowler stats after a non-maiden over is bowled', () => {
    expect(getBowlersAggregateStats([{ runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' }])).toEqual([{
      name: 'Bowlername',
      balls: 6,
      overs: 1.0,
      maidens: 0,
      runs: 6,
      ballByBallRuns: [1, 1, 1, 1, 1, 1],
      wickets: 0,
    }]);
  });
  it('should return bowler stats after a maiden over is bowled', () => {
    expect(getBowlersAggregateStats([{ runs: 0, bowler: 'Bowlername' },
      { runs: 0, bowler: 'Bowlername' },
      { runs: 0, bowler: 'Bowlername' },
      { runs: 0, bowler: 'Bowlername' },
      { runs: 0, bowler: 'Bowlername' },
      { runs: 0, bowler: 'Bowlername' }])).toEqual([{
      name: 'Bowlername',
      balls: 6,
      overs: 1.0,
      maidens: 1,
      runs: 0,
      ballByBallRuns: [0, 0, 0, 0, 0, 0],
      wickets: 0,
    }]);
  });
  it('should return bowler stats on bowling more than one over', () => {
    expect(getBowlersAggregateStats([{ runs: 1, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 3, bowler: 'Bowlername' },
      { runs: 3, bowler: 'Bowlername' },
      { runs: 5, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' },
      { runs: 2, bowler: 'Bowlername' },
      { runs: 1, bowler: 'Bowlername' }])).toEqual([{
      name: 'Bowlername',
      balls: 8,
      overs: 1.2,
      maidens: 0,
      runs: 17,
      ballByBallRuns: [1, 1, 3, 3, 5, 1, 2, 1],
      wickets: 0,
    }]);
  });
});
