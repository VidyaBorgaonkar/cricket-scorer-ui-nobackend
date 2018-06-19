import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {initialScoreBoard} from './scoreReducer';

const ScoreBoard = (props = initialScoreBoard) => {

    const otherTeamIndex = props.currentTeamIndex === 0 ? 1 : 0;
    const isOtherTeamPlayed = props.scoreboard[otherTeamIndex].overs !== 0;

    return (
        <Container>
            <br/>
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <Row>
                        <Col md="5" xs="4">
                            <b>Team 1</b><br/>
                        </Col>
                        <Col sm="1" xs="2"/>
                        <Col style={{textAlign: "right"}}>
                            <b>{props.scoreboard[props.currentTeamIndex].total}/{props.scoreboard[props.currentTeamIndex].wickets} in
                                &nbsp;{props.oversPlayed}/{props.totalNoOfOvers}</b>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br/>
            {isOtherTeamPlayed ?
                <Row>
                    <Col md={{size: 6, offset: 3}} sm="12">
                        <Row>
                            <Col>
                                Team 2 scored
                            </Col>
                            <Col style={{textAlign: "right"}}>
                                {props.scoreboard[otherTeamIndex].total}/{props.scoreboard[otherTeamIndex].wickets} in
                                &nbsp;{props.scoreboard[otherTeamIndex].overs}.toFixed(1)/{props.totalNoOfOvers}
                            </Col>
                        </Row>
                    </Col>
                </Row> : <Row>
                    <Col md={{size: 6, offset: 3}} sm="12">
                        <Row>
                            <Col>
                                Team 2 yet to play
                            </Col>
                        </Row>
                    </Col>
                </Row>

            }
        </Container>);
};

const mapToProps = (state) => {
    return {
        currentTeamIndex: state.scoreInformation.currentTeamIndex,
        scoreboard: state.scoreInformation.scoreboard,
        totalNoOfOvers: state.gameInformation.numberOfOvers,
        oversPlayed: state.currentOverDetails.totalOvers
    }
};

export default connect(mapToProps)(ScoreBoard);
