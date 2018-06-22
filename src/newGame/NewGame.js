import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TeamNameSelector from './teamNameSelector/TeamNameSelector';
import PlayerNameSelector from './playerNames/PlayerNameSelector';
import OverSelector from './overSelector';
import { Routes } from '../routes/routes';
import history from '../routes/history';
import NextBatsmanModal from '../nextBatsman/NextBatsmanModal';
import NextBowler from '../nextBowler/NextBowler';


class NewGame extends React.Component {
  static renderStep4() {
    return (
      <div>
        <NextBatsmanModal />
        <NextBowler />
        <Button onClick={() => { history.push(Routes.SCORER); }}>Next</Button>

      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { step: 0 };

    this.screenRenderFunctions = [
      this.renderStep1, this.renderStep2, this.renderStep3, NewGame.renderStep4]
      .map(fn => fn.bind(this));
  }

  renderStep1() {
    return (
      <div>
        <TeamNameSelector teamIndex={0} />
        <TeamNameSelector teamIndex={1} />
        <OverSelector />

        <Button onClick={() => { this.setState({ step: 1 }); }}>Next</Button>
      </div>
    );
  }

  renderStep2() {
    return (
      <div>
        <div>{this.props.teamNames[0]}</div>
        {
            Array.from(Array(11).keys())
                .map(playerIndex => (<PlayerNameSelector team="team1" playerIndex={playerIndex} />))
        }
        <Button onClick={() => { this.setState({ step: 2 }); }}>Next</Button>
      </div>
    );
  }

  renderStep3() {
    return (
      <div>
        <div>{this.props.teamNames[1]}</div>
        {
                    Array.from(Array(11).keys())
                        .map(playerIndex => (<PlayerNameSelector key={`team2${playerIndex}`} team="team2" playerIndex={playerIndex} />))
                }
        <Button onClick={() => { this.setState({ step: 3 }); }}>Next</Button>
      </div>
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
