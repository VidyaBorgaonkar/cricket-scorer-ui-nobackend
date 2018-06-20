import {Button, ButtonGroup,Container,Row,Col, } from 'reactstrap'
import {connect} from "react-redux";
import React from 'react';
import {selectBatsman, selectRunsScored, updateScore,selectExtra} from "./scoreActions";
const createExtraButton=(props,extras)=>
    <Button color="primary" className="mx-2 my-1 rounded" 
    style={{flexBasis:40,flexShrink:0, flexGrow:0, width:30}} outline 
    onClick={() => props.selectExtra(extras)} active={props.selectedExtra.includes(extras)} >{extras}</Button>

const Extras = (props) =>
            <Row>
                <Col md={{size: 3, offset: 3}} sm="1" className="font-weight-light" >
                        <font size="1" >Extras</font>
                </Col>
                <Col md={{size: 3, offset: 3}} sm="8">
                    <ButtonGroup className="d-flex flex-wrap">
                        {createExtraButton(props,'N')}
                        {createExtraButton(props,'W')}
                        {createExtraButton(props,'B')}
                        {createExtraButton(props,'LB')}
                    </ButtonGroup>
                </Col>
            </Row>;

const mapStateToProps = (state) => {
    return {
        selectedExtra: state.currentBall.extras
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectExtra: (extra) => dispatch(selectExtra(extra))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Extras);