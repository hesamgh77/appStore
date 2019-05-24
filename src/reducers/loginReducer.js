import { LOGIN_UPDATE, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_OUT, REMOVE_ERROR_LOGIN, LOGIN_LOADING } from '../actions/types';

const INITIAL_STATE = { token: '', username: '', password: '', isLogin: false, isError: false, invalidErrorMessage: '', loading: false, isPasswordEmpty: false, isUsernameEmpty: false };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_UPDATE: 
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_SUCCESS:
            if (typeof action.mytoken === "undefined") {
                return { ...state, ...INITIAL_STATE };
            }
            return { ...state, ...INITIAL_STATE, token: action.mytoken, isLogin: true, loading: false };
        case LOGIN_FAIL:
            if (action.payload == 'remove_emptyError') {
                return { ...state, isUsernameEmpty: false, isPasswordEmpty: false };
            }
            if (action.payload == 'invalid') {
                return { ...state, isError: true, invalidErrorMessage: 'Invalid password or username. Please try again', loading: false };
            }
            if (action.payload == 'empty_username') {
                return { ...state, isUsernameEmpty: true };
            }
            if (action.payload == 'empty_password') {
                return { ...state, isPasswordEmpty: true };
            }
            return state;
        ///////////////////////////////
        case REMOVE_ERROR_LOGIN:
            return { ...state, isError: false, invalidErrorMessage: '', isPasswordEmpty: false, isUsernameEmpty: false };
        case LOGIN_LOADING:
            return { ...state, loading: true };
        case SIGN_OUT:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
