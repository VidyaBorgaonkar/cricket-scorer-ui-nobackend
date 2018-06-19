import React from 'react';
import Button from 'reactstrap/lib/Button';
import {Routes} from '../routes/routes';
import history from '../routes/history';

const pushGameDetailsIntoHistory = () => history.push(Routes.GAME_DETAILS)

const MatchSummaryButton = () =>
  <Button color="primary"
          onClick={pushGameDetailsIntoHistory}>
      Stats
  </Button>;



export default MatchSummaryButton;