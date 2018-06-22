import { PLAY_NEXT_BATSMAN, WICKET } from '../store/actionConstants';

export const wicketTaken = () => ({
  type: WICKET,
});

export const playNextBatsman = batsmanName => ({
  type: PLAY_NEXT_BATSMAN,
  payload: batsmanName,
});
