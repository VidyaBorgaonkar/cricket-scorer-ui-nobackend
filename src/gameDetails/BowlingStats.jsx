import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getBowlersAggregateStats from './BowlerAggregation';

const addRow = (stats, index) => (
  <tr key={index}>
    <td>{stats.name}</td>
    <td>{stats.overs}</td>
    <td>{stats.maidens}</td>
    <td>{stats.runs}</td>
    <td>{stats.wickets}</td>
  </tr>
);

const BowlingStats = props => (
  <Container style={{ 'font-size': 'x-small' }}>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>Bowling Table</Col>
      <Col md={{ size: 6, offset: 3 }}>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Bowler</th>
              <th>Overs</th>
              <th>Maiden</th>
              <th>Runs</th>
              <th>Wickets</th>
            </tr>
          </thead>
          <tbody>
            {props.bowlers.map((stat, index) => addRow(stat, index))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

BowlingStats.propTypes = {
  bowlers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    balls: PropTypes.number.isRequired,
    overs: PropTypes.number.isRequired,
    maidens: PropTypes.number.isRequired,
    runs: PropTypes.number.isRequired,
    ballByBallRuns: PropTypes.arrayOf(PropTypes.number).isRequired,
    wickets: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ bowlers: getBowlersAggregateStats(state.balls) });

export default connect(mapStateToProps)(BowlingStats);
