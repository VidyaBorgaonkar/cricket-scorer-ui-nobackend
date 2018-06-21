import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OverDetails = props => (
  <Container className="mt-3 mb-3">
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col xs="4">
                            This Over
          </Col>
          <Col xs="8" className="px-5">
            {props.currentOverDetails.overDetails.map(ball => <span className="mr-3">{ball}</span>)}
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col className="font-weight-light" style={{ fontSize: 12 }}>
            Bowler: {props.bowler}
          </Col>
        </Row>
      </Col>
    </Row>

  </Container>);

const mapToProps = state => ({
  currentOverDetails: state.currentOverDetails,
  bowler: state.currentPlayers.bowler,
});


export default connect(mapToProps)(OverDetails);

OverDetails.propTypes = {
  currentOverDetails: PropTypes.shape({
    overDetails: PropTypes.arrayOf(PropTypes.string).required,
    ballsRemaining: PropTypes.number.required,
  }).isRequired,
  bowler: PropTypes.string.isRequired,
};
