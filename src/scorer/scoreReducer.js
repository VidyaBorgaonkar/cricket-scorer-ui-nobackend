import {NEXT_BALL} from "../store/actionConstants"

export const initialScoreBoard = {
    currentTeamIndex: 0,
    scoreboard: [{total: 0, wickets: 0, overs: 0.0}, {total: 0, wickets: 0, overs: 0.0}]
};

const updateScoreboard = (state = initialScoreBoard, action) => {
    switch (action.type) {
        case NEXT_BALL:
            return {
                currentTeamIndex: state.currentTeamIndex,
                scoreboard: [{
                    total: state.scoreboard[0].total + action.payload.runs,
                    wickets: 0,
                    overs: 0
                }, state.scoreboard[1]]
            };
        default:
            return state;

    }
};
export default updateScoreboard;