import React from 'react';
import {Button, ButtonGroup, Col, Container, Row} from 'reactstrap';
import {connect} from "react-redux";
import {selectBatsman, selectRunsScored, updateScore} from "./scoreActions";


const createRunsButton=(props,score)=>
    <Button color="primary" className="m-3 px-3" outline onClick={() => props.selectRunsScored(score)} active={props.selectedRuns === score}>{score}</Button>


const ThisBall = (props) =>
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 3}}>
                        <b>This Ball</b>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{size: 6, offset: 3}} className="text-center">
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => props.selectBatsman(props.batsmen[0])}
                                    active={props.selectedBatsman === props.batsmen[0]}>{props.batsmen[0]}</Button>
                            <Button outline color="primary" onClick={() => props.selectBatsman(props.batsmen[1])}
                                    active={props.selectedBatsman === props.batsmen[1]}>{props.batsmen[1]}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{size: 6, offset: 3}} sm="12">
                        <ButtonGroup style={{display:"inline-block"}}>
                            {createRunsButton(props,0)}
                            {createRunsButton(props,1)}
                            {createRunsButton(props,2)}
                            {createRunsButton(props,3)}
                            {createRunsButton(props,4)}
                            {createRunsButton(props,5)}
                            {createRunsButton(props,6)}
                            {createRunsButton(props,7)}
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
        onNextBall: (currentBall) => {
            if (currentBall.selectedBatsman != '' && currentBall.selectedRuns != -1)
                dispatch(updateScore(currentBall))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThisBall);