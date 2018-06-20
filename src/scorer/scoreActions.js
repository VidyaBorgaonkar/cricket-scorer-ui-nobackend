import { NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED, SELECT_EXTRA } from '../store/actionConstants';

export const updateScore = (data) => {
  const payload = {
    batsman: data.selectedBatsman,
    bowler: data.bowler,
    runs: data.selectedRuns,
    extras: data.extras,
  };
  return {
    type: NEXT_BALL,
    payload,
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

