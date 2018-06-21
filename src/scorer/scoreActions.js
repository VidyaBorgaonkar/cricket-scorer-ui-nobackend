import { NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED, SELECT_EXTRA, WICKET, NEXT_OVER } from '../store/actionConstants';

export const updateScore = (data) => {
  const payload = {
    batsman: data.selectedBatsman,
    bowler: data.bowler,
    runs: data.selectedRuns,
    extras: data.extras,
    wicket: data.wicket,
    currentOver: Math.floor(data.over),
  };
  return (dispatch, getState) => {
    dispatch({
      type: NEXT_BALL,
      payload,
    });


    const stateAfterNextBall = getState();

    if (stateAfterNextBall.currentOverDetails.ballsRemaining === 0) {
      dispatch({
        type: NEXT_OVER,
        currentOver: payload.currentOver,
      });
    }
  };
};


export const selectBatsman = batsmanName => ({
  type: SELECT_BATSMAN,
  payload: batsmanName,
});

export const selectRunsScored = runs => ({
  type: SELECT_RUNS_SCORED,
  payload: runs,
});
export const selectExtra = extra => ({
  type: SELECT_EXTRA,
  extra,
});

export const wicketTaken = () => ({
  type: WICKET,
});

