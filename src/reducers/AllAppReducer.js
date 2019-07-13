import { GET_ALL_APP, UPDATE_HOME_PAGE, GET_POPULAR_APP } from '../actions/types';

const INITIAL_STATE = { apiApp: {}, popularApp: {} };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_APP:
            return { ...state, apiApp: action.payload };
        case UPDATE_HOME_PAGE:
            return { ...state };
        case GET_POPULAR_APP:
            return { ...state, popularApp: action.payload };
        default:
            return { ...state };
    }
};
