import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import ScoreBoard from '../scorer/Scoreboard';
import BowlingStats from './BowlingStats';
import BatsmenStats from './BatsmenStats';

const GameDetails = () => (
  <Container className="h-100">
    <Row className="h-100">
      <ScoreBoard />
      <BatsmenStats />
      <BowlingStats />
    </Row>

  </Container>
);

export default GameDetails;
