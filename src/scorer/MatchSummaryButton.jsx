import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { Routes } from '../routes/routes';
import history from '../routes/history';

const pushGameDetailsIntoHistory = () => history.push(Routes.GAME_DETAILS);

const MatchSummaryButton = () =>
  <Container className="h-100 mt-3 mb-3">
    <Row className="align-items-center h-100">
      <Col className="text-center">
        <Button
          color="primary"
          onClick={pushGameDetailsIntoHistory}
        >Stats
        </Button>
      </Col>
    </Row>
  </Container>;


export default MatchSummaryButton;
