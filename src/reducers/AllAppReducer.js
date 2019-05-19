import { GET_ALL_APP, UPDATE_HOME_PAGE } from '../actions/types';

const INITIAL_STATE = { apiApp: {}, refresh: 1 };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_APP:
            console.log("please");
            console.log(action.payload);
            return { ...state, apiApp: action.payload };
        case UPDATE_HOME_PAGE:
            console.log(action.type);
            return { ...state, refresh: 0 };

        default:
            return state;
    }
};
