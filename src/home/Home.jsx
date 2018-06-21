import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';
import './Home.css';
import { createGameAction } from './actions';

const Home = props => (
  <Container className="h-100">
    <Row className="align-items-center h-100">
      <Col className="text-center">
        <Button color="primary" onClick={props.createGame}>Create Game</Button>
      </Col>
    </Row>
  </Container>
);

Home.propTypes = {
  createGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
