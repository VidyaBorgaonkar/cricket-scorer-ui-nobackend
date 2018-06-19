import {NEXT_BALL} from "../store/actionConstants"

export const updateScore = (data) => {
    return {
        type: NEXT_BALL,
        payload: data
    }
};

