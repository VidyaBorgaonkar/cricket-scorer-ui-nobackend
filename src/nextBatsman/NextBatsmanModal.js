import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { connect } from 'react-redux';
import { playNextBatsman } from '../nextBatsman/actions';


export class NextBatsmanModal extends React.Component {
  constructor(props) {
    super(props);

    this.addNextBatsman = this.props.addNextBatsman.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      dropdownOpen: false,
      batsmanSelected: 'Select Batsman',
    };
  }

  onClick(e) {
    this.setState({ batsmanSelected: e.currentTarget.textContent });
  }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  filterOutBatsmen() {
    const teamName = this.props.currentTeam === 0 ? 'team1' : 'team2';
    const wicketsFallen = this.props.balls.reduce((accumulator, ball) => {
      const batsmanName = ball.batsman;
      const { wicket } = ball;
      if (wicket) { accumulator.push(batsmanName); }
      return accumulator;
    }, []);
    return this.props.allPlayers[teamName].filter(name => !this.props.batsmen.includes(name))
      .filter(name => !wicketsFallen.includes(name));
  }

  render() {
    const batsmenInStrike = this.props.batsmen.length !== 2;
    return (
      <div>
        <Modal isOpen={batsmenInStrike} className="">
          <ModalHeader>Select Batsman</ModalHeader>
          <ModalBody>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {this.state.batsmanSelected}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select Batsman</DropdownItem>
                {this.filterOutBatsmen().map(name => (
                  <DropdownItem key={name} onClick={this.onClick}>{name}
                  </DropdownItem>))}
              </DropdownMenu>
            </ButtonDropdown>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
              if (this.state.batsmanSelected !== 'Select Batsman') { this.addNextBatsman(this.state.batsmanSelected); }
}}
            >
              {"Let's continue playing"}
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

NextBatsmanModal.propTypes = {
  batsmen: PropTypes.arrayOf(PropTypes.string).isRequired,
  allPlayers: PropTypes.shape({}).isRequired,
  currentTeam: PropTypes.number.isRequired,
  balls: PropTypes.arrayOf(PropTypes.shape({
    batsman: PropTypes.string.isRequired,
    bowler: PropTypes.string.isRequired,
    runs: PropTypes.number,
    extras: PropTypes.arrayOf(PropTypes.string).isRequired,
    wicket: PropTypes.bool.isRequired,
    currentOver: PropTypes.number.isRequired,
  })).isRequired,
  addNextBatsman: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  batsmen: state.currentPlayers.batsmen,
  allPlayers: state.gameInformation,
  currentTeam: state.scoreInformation.currentTeamIndex,
  balls: state.balls,

});

const mapDispatchToProps = dispatch => ({
  addNextBatsman: batsmanName => dispatch(playNextBatsman(batsmanName)),
});


export default connect(mapStateToProps, mapDispatchToProps)(NextBatsmanModal);
