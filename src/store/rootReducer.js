import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreboard from '../scorer/scoreReducer';

const rootReducer = combineReducers({
    gameInformation: gameInformationReducer,
    scoreboard
});

export default rootReducer;