import React from 'react';
import ScoreBoard from './Scoreboard';
import MatchSummaryButton from './MatchSummaryButton';
import OverDetails from '../overDetails/OverDetails';
import ThisBall from './ThisBall';
import NextBatsmanModal from '../nextBatsman/NextBatsmanModal';
import NextBowlerModel from '../nextBowler/NextBowler';

const Scorer = () => (
  <div>
    <ScoreBoard />
    <MatchSummaryButton />
    <OverDetails />
    <ThisBall />
    <NextBatsmanModal />
    <NextBowlerModel />
  </div>
);

export default Scorer;
