import React from 'react';
import Button from 'reactstrap/lib/Button';
import {gotoStatsPage} from "./actions";
import {connect} from 'react-redux';

const MatchSummaryButton = (props) =>
  <Button color="primary" onClick={props.gotoStatsPage}>Stats</Button>


const mapDispatchToProps = (dispatch) => ({
  gotoStatsPage: () => dispatch(gotoStatsPage())
});

export default connect(undefined, mapDispatchToProps)(MatchSummaryButton);