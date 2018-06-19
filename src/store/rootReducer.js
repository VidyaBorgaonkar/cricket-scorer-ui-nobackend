import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreInformation from '../scorer/scoreReducer';

const rootReducer = combineReducers({
    gameInformation: gameInformationReducer,
    scoreInformation
});

export default rootReducer;