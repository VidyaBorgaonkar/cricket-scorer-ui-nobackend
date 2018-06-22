import React from 'react';
import { Input, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_TEAM_NAME } from '../../store/actionConstants';

class TeamNameSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teamName: this.props.teamName };
  }

  onBlur() {
    const { updateTeamName, teamIndex } = this.props;
    updateTeamName(teamIndex, this.state.teamName);
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <Col className="text-center">
          <Row>
            <Col>
                  Team{`${this.props.teamIndex + 1}`} Name
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type="text"
                value={this.state.teamName}
                onChange={e => this.setState({ teamName: e.target.value })}
                onBlur={() => this.onBlur()}
              />
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

TeamNameSelector.propTypes = {
  teamIndex: PropTypes.number.isRequired,
  teamName: PropTypes.string,
  updateTeamName: PropTypes.func.isRequired,
};

TeamNameSelector.defaultProps = {
  teamName: '',
};

const mapStateToProps = (state, props) => ({
  teamName: state.gameInformation.names[props.teamIndex],
});

export function updateTeamNameAction(index, teamName) {
  return { type: UPDATE_TEAM_NAME, index, teamName };
}

const mapDispatchToProps = dispatch => ({
  updateTeamName: (index, teamName) => {
    dispatch(updateTeamNameAction(index, teamName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamNameSelector);

