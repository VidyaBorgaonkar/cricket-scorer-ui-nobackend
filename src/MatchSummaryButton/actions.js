import {GOTO_GAME_DETAILS_PAGE} from "../store/actionConstants";
import history from "../routes/history";
import {Routes} from "../routes/routes";

export const gotoStatsPage  = () => (dispatch) => {
    dispatch({ type: GOTO_GAME_DETAILS_PAGE });
    history.push(Routes.GAME_DETAILS);
};