import React from 'react';
import {Container, Row, Col, Button, ButtonToolbar, ButtonGroup} from 'reactstrap';
import {connect} from "react-redux";
import {CREATE_GAME, createGameAction} from "../home/actions";
import history from "../routes/history";
import {Routes} from "../routes/routes";
import {selectBatsman, selectRunsScored, updateScore} from "./scoreActions";


const ThisBall = (props) => 
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        This Ball
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <ButtonGroup>
                            <Button color="primary" onClick={() => props.selectBatsman(props.batsmen[0])} active={props.selectedBatsman === props.batsmen[0]}>{props.batsmen[0]}</Button>
                            <Button color="primary" onClick={() => props.selectBatsman(props.batsmen[1])} active={props.selectedBatsman === props.batsmen[1]}>{props.batsmen[1]}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{size: 6, offset: 3}} sm="12">
                        <ButtonGroup>
                            <Button color="primary" onClick={() => props.selectRunsScored(0)} active={props.selectedRuns === 0}>0</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(1)} active={props.selectedRuns === 1}>1</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(2)} active={props.selectedRuns === 2}>2</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(3)} active={props.selectedRuns === 3}>3</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(4)} active={props.selectedRuns === 4}>4</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(5)} active={props.selectedRuns === 5}>5</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(6)} active={props.selectedRuns === 6}>6</Button>
                            <Button color="primary" onClick={() => props.selectRunsScored(7)} active={props.selectedRuns === 7}>7</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <Button onClick={() => props.onNextBall(props)}>Next Ball</Button>
                    </Col>
                </Row>
            </Container>;
        

const mapStateToProps = (state) => {
    return {
        batsmen: state.currentPlayers.batsmen,
        bowler: state.currentPlayers.bowler,
        selectedBatsman: state.currentBall.batsman,
        selectedRuns: state.currentBall.runs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectBatsman: (batsmanName) => dispatch(selectBatsman(batsmanName)),
        selectRunsScored: (runsScored) => dispatch(selectRunsScored(runsScored)),
        onNextBall: (currentBall) => dispatch(updateScore(currentBall))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThisBall);