const convertBallsToOvers = (noOfBalls) => {
  const completedOvers = Math.floor(noOfBalls / 6);
  return completedOvers + ((noOfBalls % 6) / 10);
};

const isCorrectBall = extras =>
  !extras.includes('W') && !extras.includes('N');


export { convertBallsToOvers, isCorrectBall };
