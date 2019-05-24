import { GET_ALL_APP, UPDATE_HOME_PAGE } from '../actions/types';

const INITIAL_STATE = { apiApp: {} };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_APP:
            return { ...state, apiApp: action.payload };
        case UPDATE_HOME_PAGE:
            return { ...state };

        default:
            return state;
    }
};
