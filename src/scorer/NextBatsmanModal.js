import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { connect } from 'react-redux';
import { playNextBatsman} from './scoreActions';


class NextBatsmanModal extends React.Component {
  constructor(props) {
    super(props);

    this.addNextBatsman = this.props.addNextBatsman.bind(this);

    this.state = {
      dropdownOpen: false,
      batsmanSelected: 'Select Batsman'
    }
  }

  filterOutBatsmen() {
    const teamName = this.props.currentTeam === 0 ? 'team1' : 'team2';
    const wicketsFallen = this.props.balls.reduce((accumulator, ball) => {
      const batsmanName = ball.batsman;
      const wicket = ball.wicket;
      if (wicket) { accumulator.push(batsmanName); }
      return accumulator;
    }, []);
    return this.props.allPlayers[teamName].filter(name => wicketsFallen.indexOf(name) === -1).filter(name => this.props.batsmen.indexOf(name) === -1);
  }

  toggle = (e) => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onClick = (e) => {
    this.setState({
      batsmanSelected: e.currentTarget.textContent});
  }

  render() {
    const batsmenInStrike = this.props.batsmen.length !== 2;
    const yetToPlayBatsmen = this.filterOutBatsmen();
    return (
      <div>
        <Modal isOpen={batsmenInStrike} className="">
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {this.state.batsmanSelected}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select Batsman</DropdownItem>
                {yetToPlayBatsmen.map(name => <DropdownItem onClick={this.onClick}>{name}</DropdownItem>)}
              </DropdownMenu>
            </ButtonDropdown>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.addNextBatsman(this.state.batsmanSelected)}>
                Let's continue playing
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  batsmen: state.currentPlayers.batsmen,
  allPlayers: state.gameInformation,
  currentTeam: state.scoreInformation.currentTeamIndex,
  balls: state.balls,

});

const mapDispatchToProps = dispatch => ({
   addNextBatsman: (batsmanName) => dispatch(playNextBatsman(batsmanName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextBatsmanModal);
