function updateBowlerStats(bowlerStats, ball) {
  return {
    ...bowlerStats,
    balls: bowlerStats.balls + 1,
    runs: bowlerStats.runs + ball.runs,
    ballByBallRuns: [...bowlerStats.ballByBallRuns, ball.runs],
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
    wickets: 0,
  };
}

function getMaidens(completedOvers, ballByBallRuns) {
  let noOfMaidens = 0;
  for (let i = 0; i < completedOvers; i += 1) {
    const totalNumberOfRuns = ballByBallRuns.splice(0, 6).reduce((acc, val) => acc + val);
    if (totalNumberOfRuns === 0) {
      noOfMaidens += 1;
    }
  }
  return noOfMaidens;
}

function updateOverAndMaidens(aggregateStats) {
  const bowlers = [];
  Object.keys(aggregateStats).forEach((key) => {
    const stats = aggregateStats[key];
    const completedOvers = Math.floor(stats.balls / 6);
    const ballByBallRuns = [...stats.ballByBallRuns];
    stats.overs = completedOvers + ((stats.balls % 6) / 10);
    stats.maidens = getMaidens(completedOvers, ballByBallRuns);
    bowlers.push(stats);
  });
  return bowlers;
}

const getBowlersAggregateStats = (balls) => {
  if (balls === undefined) {
    return [];
  }
  const aggregateStats = {};
  balls.forEach((ball) => {
    const bowlerName = ball.bowler;
    if (bowlerName in aggregateStats) {
      aggregateStats[bowlerName] = updateBowlerStats(aggregateStats[bowlerName], ball);
    } else {
      aggregateStats[bowlerName] = initialBowlerStatsObject(ball);
    }
  });
  return updateOverAndMaidens(aggregateStats);
};

export default getBowlersAggregateStats;
