import { UPDATE_PROFILE } from '../actions/types';

const INITIAL_STATE = { userProfile: {} };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            console.log("******");
            console.log(state);
            return { ...state, userProfile: action.payload };
        default:
            return { ...state };
    }
};
