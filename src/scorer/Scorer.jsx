import React from 'react';
import ScoreBoard from './Scoreboard';
import MatchSummaryButton from './MatchSummaryButton';
import OverDetails from '../overDetails/OverDetails';
import ThisBall from './ThisBall';
import NextBatsmanModel from './NextBatsmanModal'

const Scorer = () => (
  <div>
    <ScoreBoard />
    <MatchSummaryButton />
    <OverDetails />
    <ThisBall />
    <NextBatsmanModel/>
  </div>
);

export default Scorer;
