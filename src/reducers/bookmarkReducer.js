import { ONSTAR, OFFSTAR, ADD_TO_BOOKMARK, GET_ALL_BOOKMARKED } from '../actions/types';

const INITIAL_STATE = { isStarOn: false, bookmarkedApp: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ONSTAR:
            return { ...state, isStarOn: true };
        case OFFSTAR:
            console.log("****");
            return { ...state, isStarOn: false };
        case GET_ALL_BOOKMARKED:
            return { ...state, bookmarkedApp: action.payload };
        default:
            return { ...state };
    }
};
