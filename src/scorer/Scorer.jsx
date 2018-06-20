import React from 'react';
import ScoreBoard from './Scoreboard';
import MatchSummaryButton from './MatchSummaryButton';
import OverDetails from '../overDetails/OverDetails';
import ThisBall from './ThisBall';

const Scorer = () => (
  <div>
    <ScoreBoard />
    <MatchSummaryButton />
    <OverDetails />
    <ThisBall />
  </div>
);

export default Scorer;
