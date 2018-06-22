import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TeamNameSelector from './teamNameSelector/TeamNameSelector';
import PlayerNameSelector from './playerNames/PlayerNameSelector';
import OverSelector from './overSelector';
import { Routes } from '../routes/routes';
import history from '../routes/history';
import NextBatsmanModal from '../nextBatsman/NextBatsmanModal';
import NextBowler from '../nextBowler/NextBowler';

function renderStep4() {
  return (
    <Container className="h-100">
      <Row className="align-items-center h-100">
        <Col className="text-center">
          <NextBatsmanModal />
          <NextBowler />
          <Button color="primary" onClick={() => { history.push(Routes.SCORER); }}>
              Lets Play
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };

    this.screenRenderFunctions = [
      this.renderStep1, this.renderStep2, this.renderStep3, renderStep4]
      .map(fn => fn.bind(this));
  }

  renderStep1() {
    return (
      <Container >
        <Row className="mt-5">
          <TeamNameSelector teamIndex={0} />
        </Row>
        <Row className="mt-3">
          <TeamNameSelector teamIndex={1} />
        </Row>
        <Row className="mt-3">
          <OverSelector />
        </Row>
        <div className="col-md-12 text-center mt-4">
          <Button
            onClick={() => {
                      this.setState({ step: 1 });
                  }}
            color="primary"
            className="btn btn-primary"
          >Next
          </Button>
        </div>
      </Container>);
  }

  renderStep2() {
    return (
      <Container >
        <Row className="mt-5">
          <Col className="col-md-6 offset-md-3">
            <b>{this.props.teamNames[0]}</b>
          </Col>
        </Row>
        {
            Array.from(Array(11).keys())
                .map(playerIndex => (<PlayerNameSelector team="team1" playerIndex={playerIndex} />))
        }
        <div className="col-md-12 text-center mt-4">
          <Button
            onClick={() => { this.setState({ step: 2 }); }}
            color="primary"
            className="btn btn-primary"
          >Next
          </Button>
        </div>
      </Container>
    );
  }

  renderStep3() {
    return (
      <Container >
        <Row className="mt-5">
          <Col className="col-md-6 offset-md-3">
            <b>{this.props.teamNames[1]}</b>
          </Col>
        </Row>
        {
              Array.from(Array(11).keys())
                  .map(playerIndex => (
                    <PlayerNameSelector key={`team2${playerIndex}`} team="team2" playerIndex={playerIndex} />))
          }
        <div className="col-md-12 text-center mt-4">
          <Button
            onClick={() => {
                      this.setState({ step: 3 });
                  }}
            color="primary"
            className="btn btn-primary"
          >Next
          </Button>
        </div>
      </Container>
    );
  }

  render() {
    return this.screenRenderFunctions[this.state.step]();
  }
}

const mapStateToProps = state => ({
  teamNames: state.gameInformation.names,
});


NewGame.propTypes = {
  teamNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(NewGame);
