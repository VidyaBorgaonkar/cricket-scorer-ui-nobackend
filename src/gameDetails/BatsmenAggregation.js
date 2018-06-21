import { isCorrectBall } from '../utilis';

const getFoursCount = runs => (runs === 4 ? 1 : 0);

const getSixesCount = runs => (runs === 6 ? 1 : 0);

const getStrikeRate = (totalNoOfRuns, totalBalls) =>
  (totalBalls > 0 ? parseFloat(((totalNoOfRuns * 100) / totalBalls).toFixed(2)) : 0);

const getBatsmenBallCount = extras => (isCorrectBall(extras) ? 1 : 0);

const getBatsmenRuns = (extras, runs) => (extras.length === 0 ? runs : 0);

const initialBatsmanStats = (batsman, runs, extras, wicket) => ({
  name: wicket ? batsman : `${batsman}*`,
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

const notEqualToCurrentBatsmen =
  currentPlayer => batsmanName =>
    !(currentPlayer[0] === batsmanName || currentPlayer[1] === batsmanName);


const getBatsmenStatsArray = (batsmenStats, currentPlayer) => {
  let player1 = initialBatsmanStats(currentPlayer[0], 0, [], 0);
  let player2 = initialBatsmanStats(currentPlayer[1], 0, [], 0);
  player1.totalBalls = 0;
  player2.totalBalls = 0;

  if (batsmenStats === undefined || Object.keys(batsmenStats).length === 0) {
    return [player1, player2];
  }

  player1 = batsmenStats[currentPlayer[0]] !== undefined ? batsmenStats[currentPlayer[0]] : player1;
  player2 = batsmenStats[currentPlayer[1]] !== undefined ? batsmenStats[currentPlayer[1]] : player2;

  return [player1, player2,
    ...Object.keys(batsmenStats)
      .filter(notEqualToCurrentBatsmen(currentPlayer))
      .map(batsmanName => batsmenStats[batsmanName])];
};

const getBatsmenAggregateStats = (balls, currentPlayer) => {
  if (balls === undefined || balls.length === 0) {
    return [];
  }
  const batsmenStats = balls.reverse().reduce((accumulator, ball) => {
    const {
      batsman, runs, wicket, extras,
    } = ball;
    const stats = accumulator;
    if (batsman in stats) {
      stats[batsman] = updateBatsmanStats(stats, batsman, runs, wicket, extras);
    } else {
      stats[batsman] = initialBatsmanStats(batsman, runs, extras, wicket);
    }
    return stats;
  }, {});

  return getBatsmenStatsArray(batsmenStats, currentPlayer);
};

export default getBatsmenAggregateStats;
