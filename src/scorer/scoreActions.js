import {NEXT_BALL, SELECT_BATSMAN, SELECT_RUNS_SCORED} from "../store/actionConstants"

export const updateScore = (data) => {

    let payload = {
        batsman: data.selectedBatsman,
        bowler: data.bowler,
        runs: data.selectedRuns
    }
    console.log(payload)
    return {
        type: NEXT_BALL,
        payload: payload
    }
};


export const selectBatsman = (batsmanName) => {
    return {
        type: SELECT_BATSMAN,
        payload: batsmanName
    }
};

export const selectRunsScored = (runs) => {
    return {
        type: SELECT_RUNS_SCORED,
        payload: runs
    }
};

