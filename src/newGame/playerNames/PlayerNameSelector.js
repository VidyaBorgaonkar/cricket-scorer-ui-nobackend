import React from 'react';
import { Col, Container, Input, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_PLAYER_NAME } from '../../store/actionConstants';

class PlayerNameSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerName: this.props.playerName };
  }

  onBlur() {
    const { updatePlayerName, team, playerIndex } = this.props;
    updatePlayerName(team, playerIndex, this.state.playerName);
  }

  render() {
    return (
      <Container className="mt-3 mb-3">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Row>
              <Col>
                <Input
                  type="text"
                  value={this.state.playerName}
                  onChange={e => this.setState({ playerName: e.target.value })}
                  onBlur={() => this.onBlur()}
                />
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}

PlayerNameSelector.propTypes = {
  team: PropTypes.string.isRequired,
  playerIndex: PropTypes.number.isRequired,
  playerName: PropTypes.string,
  updatePlayerName: PropTypes.func.isRequired,
};

PlayerNameSelector.defaultProps = {
  playerName: '',
};

const mapStateToProps = (state, props) => ({
  playerName: state.gameInformation[props.team][props.playerIndex],
});

export function updatePlayerNameAction(team, playerIndex, playerName) {
  return {
    type: UPDATE_PLAYER_NAME, team, playerIndex, playerName,
  };
}

const mapDispatchToProps = dispatch => ({
  updatePlayerName: (team, playerIndex, playerName) => {
    dispatch(updatePlayerNameAction(team, playerIndex, playerName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNameSelector);

