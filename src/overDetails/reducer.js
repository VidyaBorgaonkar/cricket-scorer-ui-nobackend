import {NEXT_BALL} from "../store/actionConstants"

export const initialState = {overDetails:[],ballsRemaining:6,totalOvers:0,totalBalls:0};

const updateCurrentOver = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_BALL:

            let {runs,extras=[]}=action.payload;
            let currentBallDetails='';

            let {ballsRemaining}=state;
            let {totalOvers}=state;
            let {totalBalls}=state;

            if(runs || extras.length===0) {
                currentBallDetails += runs;
            }

            if(extras.length!==0){
                currentBallDetails+=extras
            }

            if(extras.indexOf('W')===-1&&extras.indexOf('N')===-1){
                ballsRemaining--;
                totalBalls++;
                let completedTotalOvers = Math.floor( totalBalls/ 6);
                totalOvers = completedTotalOvers + "." + totalBalls % 6;

            }
            if(ballsRemaining<=0) {
                let completedTotalOvers = Math.floor( totalBalls/ 6);
                totalOvers = completedTotalOvers + "." + totalBalls % 6;
                ballsRemaining=6;
                return {overDetails:[], ballsRemaining,totalOvers,totalBalls}};

            return {overDetails:[...state.overDetails, currentBallDetails], ballsRemaining,totalOvers,totalBalls};
        default:
            return state;

    }
};
export default updateCurrentOver;