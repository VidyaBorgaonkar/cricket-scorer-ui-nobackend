import React from 'react';
import { Input, Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UPDATE_MAX_OVERS } from '../store/actionConstants';

class OverSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxOvers: this.props.maxOvers };
  }

  onBlur() {
    const { updateMaxOvers } = this.props;
    updateMaxOvers(this.state.maxOvers);
  }

  render() {
    return (
      <Container className="mt-3 mb-3">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Row>
              <Col>
                Number of Overs
                <Input
                  type="text"
                  value={this.state.maxOvers}
                  onChange={e => this.setState({ maxOvers: e.target.value })}
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

OverSelector.propTypes = {
  maxOvers: PropTypes.number.isRequired,
  updateMaxOvers: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  maxOvers: state.gameInformation.numberOfOvers,
});

export function updateMaxOversAction(maxOvers) {
  return { type: UPDATE_MAX_OVERS, maxOvers };
}

const mapDispatchToProps = dispatch => ({
  updateMaxOvers: (maxOvers) => {
    dispatch(updateMaxOversAction(+maxOvers));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OverSelector);

