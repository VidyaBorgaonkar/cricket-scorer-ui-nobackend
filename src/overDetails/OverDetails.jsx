import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {connect} from 'react-redux';

const OverDetails = (props ) => {
    console.log({props})
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <Row>
                        <Col xs="4">
                            This Over
                        </Col>
                        <Col xs="8">
                            {props.currentOverDetails.overDetails.join(' ')}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
};

const mapToProps = (state) => {
    return {
        currentOverDetails: state.currentOverDetails
    }
};


export default connect(mapToProps)(OverDetails);
