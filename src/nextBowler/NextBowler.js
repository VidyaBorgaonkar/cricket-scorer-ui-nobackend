import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { connect } from 'react-redux';
import setBowler from './actions';


class NextBowlerModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      dropdownOpen: false,
      bowlerSelected: 'Select',
    };
  }

  onClick(e) {
    this.setState({
      bowlerSelected: e.currentTarget.textContent,
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  filterOutCurrentBowler() {
    const { balls } = this.props;
    const { allBowlers } = this.props;

    if (!balls || !balls.length) return allBowlers;

    const lastBallInfo = balls[balls.length - 2];
    return allBowlers.filter(name => name !== lastBallInfo.bowler);
  }

  render() {
    if (this.props.bowler) return null;
    const yetToPlayBatsmen = this.filterOutCurrentBowler();
    return (
      <div>
        <Modal isOpen className="">
          <ModalHeader>Select Bowler</ModalHeader>
          <ModalBody>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {this.state.bowlerSelected}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select Bowler</DropdownItem>
                {yetToPlayBatsmen.map(name => (
                  <DropdownItem
                    onClick={this.onClick}
                  >{name}
                  </DropdownItem>))}
              </DropdownMenu>
            </ButtonDropdown>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => { this.props.setBowler(this.state.bowlerSelected); this.state.bowlerSelected = 'Select'; }}>
              {"Let's continue playing"}
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


NextBowlerModal.propTypes = {
  allBowlers: PropTypes.arrayOf(PropTypes.string).isRequired,
  bowler: PropTypes.string.isRequired,
  balls: PropTypes.arrayOf(PropTypes.shape({
    batsman: PropTypes.string.isRequired,
    bowler: PropTypes.string.isRequired,
    runs: PropTypes.number,
    extras: PropTypes.arrayOf(PropTypes.string).isRequired,
    wicket: PropTypes.bool.isRequired,
    currentOver: PropTypes.number.isRequired,
  })).isRequired,
  setBowler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const currentTeam = state.scoreInformation.currentTeamIndex;
  const teamName = currentTeam === 0 ? 'team2' : 'team1';

  return {
    bowler: state.currentPlayers.bowler,
    allBowlers: state.gameInformation[teamName],
    balls: state.balls,
  };
};

const mapDispatchToProps = dispatch => ({
  setBowler: bowlerName => dispatch(setBowler(bowlerName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextBowlerModal);
