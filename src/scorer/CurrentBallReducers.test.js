import updateCurrentBall from './currentBallReducer';
import {NEXT_BALL,SELECT_BATSMAN, SELECT_RUNS_SCORED} from "../store/actionConstants"

describe('currentBallReducerOnLoad', () => {
    it('should return initial state when loading DOM ',()=> {

        const action = { }
        const newState  = {
            batsman: "",
            runs: -1
        };


        expect(updateCurrentBall(undefined, action)).toEqual(newState);
    });
});



describe('currentBallReducerOnNewBallAction', () => {
    it('should return initial state for new ball action',()=> {

        const state ={};
        const action = {
            type: NEXT_BALL,
            payload: {batsman: "name", runs: 6, bowler: "name2"}
        }
        const newState  = {
            batsman: "",
            runs: -1
        };


        expect(updateCurrentBall(state, action)).toEqual(newState);
    });
});

