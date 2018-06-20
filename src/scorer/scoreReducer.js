import { NEXT_BALL } from '../store/actionConstants';

export const initialScoreBoard = {
  currentTeamIndex: 0,
  scoreboard: [{ total: 0, wickets: 0, overs: 0.0 }, { total: 0, wickets: 0, overs: 0.0 }],
};

const updateScoreboard = (state = initialScoreBoard, action) => {
  switch (action.type) {
    case NEXT_BALL: {
      const { extras } = action.payload;
      if (extras.length !== 0) {
        for (let i = 0; i < action.payload.extras.length; i += 1) {
          if (action.payload.extras.indexOf('W') !== -1 || action.payload.extras.indexOf('N') !== -1) {
            return {
              currentTeamIndex: state.currentTeamIndex,
              scoreboard: [{
                total: state.scoreboard[0].total + 1 + action.payload.runs,
                wickets: 0,
                overs: 0,
              }, state.scoreboard[1]],
            };
          }
        }
      }
      return {
        currentTeamIndex: state.currentTeamIndex,
        scoreboard: [{
          total: state.scoreboard[0].total + action.payload.runs,
          wickets: 0,
          overs: 0,
        }, state.scoreboard[1]],
      };
    }
    default:
      return state;
  }
};
export default updateScoreboard;
