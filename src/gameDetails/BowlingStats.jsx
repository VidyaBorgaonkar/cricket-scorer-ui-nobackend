import React from 'react';
import {Table} from 'reactstrap';
import {connect} from "react-redux";


const addRow = (stats, index) => {
    return (
        <tr key={index}>
            <td>{stats.name}</td>
            <td>{stats.overs}</td>
            <td>{stats.maidens}</td>
            <td>{stats.runs}</td>
            <td>{stats.wickets}</td>
        </tr>
    )
};

const BowlingStats = (props) => {
    return (
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
};

function getBowlersAggregateStats(balls) {
    let aggregateStats = {};
    balls.forEach((ball) => {
        let bowlerName = ball.bowler;
        if (bowlerName in aggregateStats) {
            aggregateStats[bowlerName].balls += 1;
            aggregateStats[bowlerName].runs += ball.runs;
            aggregateStats[bowlerName].ballByBallRuns = [...aggregateStats[bowlerName].ballByBallRuns, ball.runs];
        }
        else {
            aggregateStats[bowlerName] = {
                name: bowlerName,
                balls: 1,
                overs: 0,
                maidens: 0,
                runs: ball.runs,
                ballByBallRuns: [ball.runs],
                wickets: 0
            };
        }
    });
    let bowlers = [];
    Object.keys(aggregateStats).forEach((key) => {
        const stats = aggregateStats[key];
        const completedOvers = Math.floor(stats.balls / 6);
        const ballByBallRuns = [...stats.ballByBallRuns];
        let noOfMaidens = 0;
        for (var i = 0; i < completedOvers; i++) {
            ballByBallRuns.splice(0, 6).reduce((acc, val) => acc + val) == 0 ? noOfMaidens++ : null;
        }
        stats.overs = completedOvers + "." + stats.balls % 6;
        stats.maidens = noOfMaidens;
        bowlers.push(stats);
    });
    return bowlers;
}

const mapStateToProps = (state) => {
    return {bowlers: getBowlersAggregateStats(state.balls)};
};


export default connect(mapStateToProps)(BowlingStats);