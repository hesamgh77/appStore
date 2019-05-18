import { SIGNUP_UPDATE, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/types';

const INITIAL_STATE = { firstname: '', lastname: '', username: '', phone: '', email: '', password: '', isSuccess: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case SIGNUP_SUCCESS:
            return { ...state, ...INITIAL_STATE, isSuccess: true };
        default:
            return state;
        }
};
