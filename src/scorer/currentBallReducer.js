import {NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED} from "../store/actionConstants"

const initialcurrentBall = {
    batsman: "",
    runs: -1
};

const updateCurrentBall = (state = initialcurrentBall, action) => {
    switch (action.type) {
        case SELECT_BATSMAN: return {...state, batsman: action.payload}
        case SELECT_RUNS_SCORED: return {...state, runs: action.payload}
        case NEXT_BALL: return initialcurrentBall
        default:
            return state;

    }
};
export default updateCurrentBall;