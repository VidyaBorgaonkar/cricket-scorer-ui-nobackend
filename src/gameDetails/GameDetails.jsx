import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import ScoreBoard from '../scorer/Scoreboard';
import BowlingStats from './BowlingStats';

const GameDetails = () => (
  <Container className="h-100">
    <Row className="h-100">
      <ScoreBoard />
      <BowlingStats />
    </Row>

  </Container>
);

export default GameDetails;
