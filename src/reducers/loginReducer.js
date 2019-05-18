import { LOGIN_UPDATE, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = { token: '', username: '', password: '', isLogin: false };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_UPDATE: 
            console.log('hessam');
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_SUCCESS:
            console.log(action.mytoken);
            return { ...state, ...INITIAL_STATE, token: action.mytoken, isLogin: true };
            //return state;
        case LOGIN_FAIL:
            console.log('error');
            return state;
        case SIGN_OUT:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
