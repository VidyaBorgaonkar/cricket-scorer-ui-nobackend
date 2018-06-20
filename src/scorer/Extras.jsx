import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import React from 'react';
import { selectExtra } from './scoreActions';

const createExtraButton = (props, extras) => (
  <Button
    color="primary"
    className="mx-2 my-1 rounded"
    style={{
        flexBasis: 40, flexShrink: 0, flexGrow: 0, width: 30,
        }}
    outline
    onClick={() => props.selectExtra(extras)}
    active={props.selectedExtra.includes(extras)}
  >{extras}
  </Button>);


createExtraButton.propTypes = {
  selectExtra: PropTypes.func.isRequired,
  selectedExtra: PropTypes.arrayOf(PropTypes.string).isRequired,
};


const Extras = props => (
  <Row>
    <Col
      xs={{ size: 1 }}
      md={{ offset: 3 }}
      style={{ fontSize: 12 }}
      className="mt-2 font-weight-light"
    >
      Extras
    </Col>
    <Col >
      <ButtonGroup className="d-flex flex-wrap">
        {createExtraButton(props, 'N')}
        {createExtraButton(props, 'W')}
        {createExtraButton(props, 'B')}
        {createExtraButton(props, 'LB')}
      </ButtonGroup>
    </Col>
  </Row>);

const mapStateToProps = state => ({
  selectedExtra: state.currentBall.extras,
});

const mapDispatchToProps = dispatch => ({
  selectExtra: extra => dispatch(selectExtra(extra)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Extras);
