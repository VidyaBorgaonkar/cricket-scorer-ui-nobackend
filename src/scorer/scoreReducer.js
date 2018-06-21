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
      const { extras, runs, wicket } = action.payload;
      const { currentTeamIndex, scoreboard } = state;
      const currentTeam = state.scoreboard[currentTeamIndex];

      const total = currentTeam.total + runs;
      const wicketCounter = wicket ? 1 : 0;

      if (extras.includes('W') || extras.includes('N')) {
        scoreboard[currentTeamIndex] = {// TODO fix later
          ...currentTeam,
          total: total + 1,
          wickets: scoreboard[currentTeamIndex].wickets + wicketCounter,
        };

        return {
          ...state,
          scoreboard: [...scoreboard],
        };
      }

      const totalBalls = currentTeam.totalBalls + 1;
      const overs = Math.floor(totalBalls / 6) + ((totalBalls % 6) / 10);

      scoreboard[currentTeamIndex] = {// TODO fix later
        ...currentTeam,
        total,
        wickets: scoreboard[currentTeamIndex].wickets + wicketCounter,
        totalBalls,
        overs,
      };


      return {
        ...state,
        scoreboard: [...scoreboard],
      };
    }
    default:
      return state;
  }
};
export default updateScoreboard;
