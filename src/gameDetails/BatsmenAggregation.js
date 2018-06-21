const getFoursCount = runs => (runs === 4 ? 1 : 0);

const getSixesCount = runs => (runs === 6 ? 1 : 0);

const getStrikeRate = (totalNoOfRuns, totalBalls) =>
  (totalBalls > 0 ? parseFloat(((totalNoOfRuns * 100) / totalBalls).toFixed(2)) : 0);

const getBatsmenBallCount = extras => (extras.includes('W') || extras.includes('N') ? 0 : 1);

const getBatsmenRuns = (extras, runs) => (extras.length === 0 ? runs : 0);

const initialBatsmanStats = (batsman, runs, extras) => ({
  name: `${batsman}*`,
  runs: getBatsmenRuns(extras, runs),
  totalBalls: getBatsmenBallCount(extras),
  fours: getFoursCount(runs),
  sixes: getSixesCount(runs),
  strikeRate: getStrikeRate(getBatsmenRuns(extras, runs), getBatsmenBallCount(extras)),
});

const updateBatsmanStats = (stats, batsman, runs, wicket, extras) => {
  const batsmenBallCount = getBatsmenBallCount(extras);
  const playedBalls = stats[batsman].totalBalls;
  const totalBalls = extras.length === 0 ? playedBalls + 1 : playedBalls + batsmenBallCount;
  const totalNoOfRuns = stats[batsman].runs + getBatsmenRuns(extras, runs);
  const name = wicket ? batsman : stats[batsman].name;
  const strikeRate = getStrikeRate(totalNoOfRuns, totalBalls);
  return {
    ...stats[batsman],
    name,
    runs: totalNoOfRuns,
    totalBalls,
    fours: stats[batsman].fours + getFoursCount(runs),
    sixes: stats[batsman].sixes + getSixesCount(runs),
    strikeRate,
  };
};

const getBatsmenAggregateStats = (balls) => {
  if (balls === undefined) {
    return [];
  }
  const batsmenStats = balls.reduce((accumulator, ball) => {
    const {
      batsman, runs, wicket, extras,
    } = ball;
    const stats = accumulator;
    if (batsman in stats) {
      stats[batsman] = updateBatsmanStats(stats, batsman, runs, wicket, extras);
    } else {
      stats[batsman] = initialBatsmanStats(batsman, runs, extras);
    }
    return stats;
  }, {});

  return Object.keys(batsmenStats).map(batsmanName => batsmenStats[batsmanName]);
};

export default getBatsmenAggregateStats;
