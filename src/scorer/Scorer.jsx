import React from 'react';
import ScoreBoard from './Scoreboard';
import MatchSummaryButton from './MatchSummaryButton'
import ThisBall from './ThisBall';

const Scorer = () => (
    <div>
        <ScoreBoard/>
        <MatchSummaryButton/>
        <ThisBall />
    </div>
);

export default Scorer;
