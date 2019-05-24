import { SIGNUP_UPDATE, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNUP_REMOVE_MESSAGE  } from '../actions/types';

const INITIAL_STATE = { firstname: '', lastname: '', username: '', phone: '', email: '', password: '', isSuccess: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case SIGNUP_SUCCESS:
            return { ...state, ...INITIAL_STATE, isSuccess: true };
        case SIGNUP_REMOVE_MESSAGE:
            return { ...state, isSuccess: null };
        case SIGNUP_FAIL:
            return { ...state, ...INITIAL_STATE, isSuccess: false };
        default:
            return state;
        }
};
