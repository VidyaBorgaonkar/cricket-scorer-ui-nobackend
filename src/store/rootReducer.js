import {combineReducers} from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreInformation from '../scorer/scoreReducer';
import updateCurrentOver from '../overDetails/reducer';
import updateCurrentPlayers from '../scorer/currentPlayersReducer';
import updateCurrentBall from '../scorer/currentBallReducer';
import updateBallsBowled from '../gameDetails/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreInformation,
  currentPlayers: updateCurrentPlayers,
  currentBall: updateCurrentBall,
  currentOverDetails: updateCurrentOver,
  balls: updateBallsBowled,
});

export default rootReducer;
