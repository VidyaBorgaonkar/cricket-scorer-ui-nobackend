import React from 'react';
import { Input, Col, Container, Row } from 'reactstrap';
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
      <Container className="mt-3 mb-3">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Row>
              <Col>
                  Team {`${this.props.teamIndex + 1}`} name
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
        </Row>

      </Container>
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

const
  mapStateToProps = (state, props) => ({
    teamName: state.gameInformation.names[props.teamIndex],
  });

const
  mapDispatchToProps = dispatch => ({
    updateTeamName: (index, teamName) => {
      dispatch({ type: UPDATE_TEAM_NAME, index, teamName });
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(TeamNameSelector);

