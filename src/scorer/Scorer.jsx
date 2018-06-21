import React from 'react';
import ScoreBoard from './Scoreboard';
import MatchSummaryButton from './MatchSummaryButton';
import OverDetails from '../overDetails/OverDetails';
import ThisBall from './ThisBall';
import NextBatsmanModel from './NextBatsmanModal';
import NextBowlerModel from '../nextBowler/NextBowler';

const Scorer = () => (
  <div>
    <ScoreBoard />
    <MatchSummaryButton />
    <OverDetails />
    <ThisBall />
    <NextBatsmanModel />
    <NextBowlerModel />
  </div>
);

export default Scorer;
