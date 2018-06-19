import React from 'react';
import Button from 'reactstrap/lib/Button';
import {Routes} from '../routes/routes';
import history from '../routes/history';



import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

const pushGameDetailsIntoHistory = () => history.push(Routes.GAME_DETAILS);

const MatchSummaryButton = () =>
    <Container className="h-100 mt-3 mb-3">
        <Row className="align-items-center h-100">
            <Col className="text-center">
                <Button color="primary"
                        onClick={pushGameDetailsIntoHistory}>
                    Stats
                </Button>
            </Col>
        </Row>
    </Container>;



export default MatchSummaryButton;