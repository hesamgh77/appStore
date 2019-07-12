import { GET_ALL_COMMENT, UPDATE_COMMENT } from '../actions/types';

const INITIAL_STATE = { allComment: {} };
export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_COMMENT:
            return { ...state, allComment: action.payload };
        case UPDATE_COMMENT:
            return 3;
        default:
            return 2;
    }
};
