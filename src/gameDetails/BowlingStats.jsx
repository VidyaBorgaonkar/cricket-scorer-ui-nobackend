import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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

function getBowlersAggregateStats(balls) {
  const aggregateStats = {};
  balls.forEach((ball) => {
    const bowlerName = ball.bowler;
    if (bowlerName in aggregateStats) {
      aggregateStats[bowlerName].balls += 1;
      aggregateStats[bowlerName].runs += ball.runs;
      aggregateStats[bowlerName].ballByBallRuns =
        [...aggregateStats[bowlerName].ballByBallRuns, ball.runs];
    } else {
      aggregateStats[bowlerName] = {
        name: bowlerName,
        balls: 1,
        overs: 0,
        maidens: 0,
        runs: ball.runs,
        ballByBallRuns: [ball.runs],
        wickets: 0,
      };
    }
  });
  const bowlers = [];
  Object.keys(aggregateStats).forEach((key) => {
    const stats = aggregateStats[key];
    const completedOvers = Math.floor(stats.balls / 6);
    const ballByBallRuns = [...stats.ballByBallRuns];
    let noOfMaidens = 0;
    for (let i = 0; i < completedOvers; i += 1) {
      const totalNumberOfRuns = ballByBallRuns.splice(0, 6).reduce((acc, val) => acc + val);
      if (totalNumberOfRuns === 0) {
        noOfMaidens += 1;
      }
    }
    stats.overs = `${completedOvers}.${stats.balls % 6}`;
    stats.maidens = noOfMaidens;
    bowlers.push(stats);
  });
  return bowlers;
}

const mapStateToProps = state => ({ bowlers: getBowlersAggregateStats(state.balls) });


export default connect(mapStateToProps)(BowlingStats);
