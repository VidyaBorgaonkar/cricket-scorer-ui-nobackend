import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreInformation from '../scorer/scoreReducer';
import updateCurrentPlayers from '../scorer/currentPlayersReducer'
import updateCurrentBall from '../scorer/currentBallReducer'

const rootReducer = combineReducers({
    gameInformation: gameInformationReducer,
    scoreInformation,
    currentPlayers: updateCurrentPlayers,
    currentBall: updateCurrentBall
});

export default rootReducer;