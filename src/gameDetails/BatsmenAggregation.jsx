const getBatsmenAggregateStats = (balls) => {
  if (balls === undefined) {
    return [];
  }
  const batsmenStats = balls.reduce((accumulator, ball) => {
    const { batsman, runs } = ball;
    const stats = accumulator;
    if (batsman in stats) {
      stats[batsman] = {
        ...stats[batsman],
        runs: stats[batsman].runs + runs,
        totalBalls: stats[batsman].totalBalls + 1,
        fours: stats[batsman].fours + (runs === 4 ? 1 : 0),
        sixes: stats[batsman].sixes + (runs === 6 ? 1 : 0),
        strikeRate: ((stats[batsman].runs * 100) / stats[batsman].totalBalls),
      };
    } else {
      stats[batsman] = {
        name: batsman,
        runs,
        totalBalls: 1,
        fours: 0,
        sixes: 0,
        strikeRate: 0,
      };
    }
    return stats;
  }, {});

  return Object.keys(batsmenStats).map(key => batsmenStats[key]);
};

export default getBatsmenAggregateStats;
