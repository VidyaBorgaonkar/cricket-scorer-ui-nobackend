import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {updateScore} from './scoreActions';
import {initialScoreBoard} from './scoreReducer';

const ScoreBoard = (props = initialScoreBoard) => {
    return (<Container>
        <br/>
        <Row>
            <Col md={{size: 6, offset: 3}}>
                <Row>
                    <Col md="5" xs="4">
                        <b>Team 1</b><br/>
                        <button onClick={() => props.updateScoreboard({run: 1})}>test</button>
                    </Col>
                    <Col sm="1" xs="2"/>
                    <Col style={{textAlign: "right"}}>
                        <b>{props.scoreboard[props.currentTeamIndex].total}/5 in 12.1/20</b>
                    </Col>
                </Row>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={{size: 6, offset: 3}} sm="12">
                <Row>
                    <Col>
                        Team 2 scored
                    </Col>
                    <Col style={{textAlign: "right"}}>
                        <b>120/5 in 12.1/20</b>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>)
};

const mapToProps = (state) => {
    return {
        currentTeamIndex: state.scoreboard.currentTeamIndex,
        scoreboard: state.scoreboard.scoreboard
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateScoreboard: (thisBallData) => dispatch(updateScore(thisBallData))
    }
};
export default connect(mapToProps, mapDispatchToProps)(ScoreBoard);
