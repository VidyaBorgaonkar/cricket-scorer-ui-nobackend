function initialBatsmanStats(batsman, runs) {
  return {
    name: batsman,
    runs,
    totalBalls: 1,
    fours: runs === 4 ? 1 : 0,
    sixes: runs === 6 ? 1 : 0,
    strikeRate: runs * 100,
  };
}

function updateBatsmanStats(stats, batsman, runs) {
  const totalBalls = stats[batsman].totalBalls + 1;
  const totalNoOfRuns = stats[batsman].runs + runs;
  const strikeRate = parseFloat(((totalNoOfRuns * 100) / totalBalls).toFixed(2));
  return {
    ...stats[batsman],
    runs: totalNoOfRuns,
    totalBalls,
    fours: stats[batsman].fours + (runs === 4 ? 1 : 0),
    sixes: stats[batsman].sixes + (runs === 6 ? 1 : 0),
    strikeRate,
  };
}

const getBatsmenAggregateStats = (balls) => {
  if (balls === undefined) {
    return [];
  }
  const batsmenStats = balls.reduce((accumulator, ball) => {
    const { batsman, runs } = ball;
    const stats = accumulator;
    if (batsman in stats) {
      stats[batsman] = updateBatsmanStats(stats, batsman, runs);
    } else {
      stats[batsman] = initialBatsmanStats(batsman, runs);
    }
    return stats;
  }, {});

  return Object.keys(batsmenStats).map(batsmanName => batsmenStats[batsmanName]);
};

export default getBatsmenAggregateStats;
