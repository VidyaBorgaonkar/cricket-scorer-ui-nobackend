import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreInformation from '../scorer/scoreReducer';
import updateCurrentOver from '../overDetails/reducer'

import updateCurrentPlayers from '../scorer/currentPlayersReducer'
import updateCurrentBall from '../scorer/currentBallReducer'

const rootReducer = combineReducers({
    gameInformation: gameInformationReducer,
    scoreInformation,
    currentPlayers: updateCurrentPlayers,
    currentBall: updateCurrentBall,
    currentOverDetails:updateCurrentOver
});

export default rootReducer;