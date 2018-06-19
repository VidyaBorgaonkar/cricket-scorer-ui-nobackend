import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {updateScore} from './scoreActions';
import {initialScoreBoard} from './scoreReducer';

const ScoreBoard = (props = initialScoreBoard) => {

    const isOtherTeamPlayed = props.scoreboard[1].overs !== 0;
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
                            <b>{props.scoreboard[props.currentTeamIndex].total}/0 in 0/{props.totalNoOfOvers}</b>
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
                                120/5 in 12.1/{props.totalNoOfOvers}
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
        totalNoOfOvers: state.gameInformation.numberOfOvers
    }
};

// to be removed
const mapDispatchToProps = (dispatch) => {
    return {
        updateScoreboard: (thisBallData) => dispatch(updateScore(thisBallData))
    }
};
export default connect(mapToProps, mapDispatchToProps)(ScoreBoard);
