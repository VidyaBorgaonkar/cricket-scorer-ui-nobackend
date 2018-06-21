import { SELECT_BOWLER } from '../store/actionConstants';

const setBowler = bowlerName => ({
  type: SELECT_BOWLER,
  bowlerName,
});
export default setBowler;
