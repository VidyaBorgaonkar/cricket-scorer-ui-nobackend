import { convertBallsToOvers } from '../utilis';

function updateBowlerStats(bowlerStats, ball) {
  return {
    ...bowlerStats,
    balls: bowlerStats.balls + 1,
    runs: bowlerStats.runs + ball.runs,
    ballByBallRuns: [...bowlerStats.ballByBallRuns, ball.runs],
    wickets: ball.wicket ? bowlerStats.wickets + 1 : bowlerStats.wickets,
  };
}

function initialBowlerStatsObject(ball) {
  return {
    name: ball.bowler,
    balls: 1,
    overs: 0,
    maidens: 0,
    runs: ball.runs,
    ballByBallRuns: [ball.runs],
    wickets: ball.wicket ? 1 : 0,
  };
}

function getMaidens(ballByBallRuns) {
  let noOfMaidens = 0;
  for (let i = 0; i < Math.floor(ballByBallRuns.length / 6); i += 1) {
    const totalNumberOfRuns = ballByBallRuns.splice(0, 6).reduce((acc, val) => acc + val);
    if (totalNumberOfRuns === 0) {
      noOfMaidens += 1;
    }
  }
  return noOfMaidens;
}

function updateOverAndMaidens(aggregateStats) {
  return Object.keys(aggregateStats).map((key) => {
    const stats = aggregateStats[key];
    const ballByBallRuns = [...stats.ballByBallRuns];
    stats.overs = convertBallsToOvers(stats.balls);
    stats.maidens = getMaidens(ballByBallRuns);
    return stats;
  });
}

const getBowlersAggregateStats = (balls) => {
  if (balls === undefined) {
    return [];
  }
  const aggregateStats = balls.reduce((accumulator, ball) => {
    const bowlerName = ball.bowler;
    const stats = accumulator;
    if (bowlerName in stats) {
      stats[bowlerName] = updateBowlerStats(stats[bowlerName], ball);
    } else {
      stats[bowlerName] = initialBowlerStatsObject(ball);
    }
    return stats;
  }, {});

  return updateOverAndMaidens(aggregateStats);
};

export default getBowlersAggregateStats;
