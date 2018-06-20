import { NEXT_BALL } from '../store/actionConstants';

export const initialScoreBoard = {
  currentTeamIndex: 0,
  scoreboard: [{
    total: 0, wickets: 0, overs: 0.0, totalBalls: 0,
  },
  {
    total: 0, wickets: 0, overs: 0.0, totalBalls: 0,
  }],
};

const updateScoreboard = (state = initialScoreBoard, action) => {
  switch (action.type) {
    case NEXT_BALL: {
      const { extras } = action.payload;
      if (extras.length !== 0) {
        for (let i = 0; i < extras.length; i += 1) {
          if (extras.indexOf('W') !== -1 || extras.indexOf('N') !== -1) {
            return {
              currentTeamIndex: state.currentTeamIndex,
              scoreboard: [{
                total: state.scoreboard[0].total + 1 + action.payload.runs,
                wickets: 0,
                totalBalls: state.scoreboard[0].totalBalls,
                overs: state.scoreboard[0].overs,
              }, state.scoreboard[1]],
            };
          }
        }
      }
      const countBalls = state.scoreboard[0].totalBalls + 1;
      return {
        currentTeamIndex: state.currentTeamIndex,
        scoreboard: [{
          total: state.scoreboard[0].total + action.payload.runs,
          wickets: 0,
          totalBalls: countBalls,
          overs: Math.floor(countBalls / 6) +
          ((countBalls % 6) / 10),
        }, state.scoreboard[1]],
      };
    }
    default:
      return state;
  }
};
export default updateScoreboard;
