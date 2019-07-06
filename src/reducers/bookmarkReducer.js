import { ONSTAR, OFFSTAR } from '../actions/types';

const INITIAL_STATE = { isStarOn: false };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ONSTAR:
            return { ...state, isStarOn: true };
        case OFFSTAR:
            return { ...state, isStarOn: false };
        default:
            return 1;
    }
};
