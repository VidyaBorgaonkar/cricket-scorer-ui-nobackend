import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getBatsmenAggregateStats from './BatsmenAggregation';

const addRow = (stats, index) => (
  <tr key={index}>
    <td>{stats.name}</td>
    <td>{stats.runs}</td>
    <td>{stats.totalBalls}</td>
    <td>{stats.fours}</td>
    <td>{stats.sixes}</td>
    <td>{stats.strikeRate}</td>
  </tr>
);

const BatsmenStats = props => (
  <Container className="mt-4">
    <Row>
      <Col md={{ size: 6, offset: 3 }}>Batting Table</Col>
      <Col md={{ size: 6, offset: 3 }}>
        <Table striped bordered responsive style={{ fontSize: 'x-small' }}>
          <thead>
            <tr>
              <th>Batsman</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {props.batsmen.map((stat, index) => addRow(stat, index))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

BatsmenStats.propTypes = {
  batsmen: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    runs: PropTypes.number.isRequired,
    totalBalls: PropTypes.number.isRequired,
    fours: PropTypes.number.isRequired,
    sixes: PropTypes.number.isRequired,
    strikeRate: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps =
        state => ({ batsmen: getBatsmenAggregateStats(state.balls, state.currentPlayers.batsmen) });

export default connect(mapStateToProps)(BatsmenStats);
