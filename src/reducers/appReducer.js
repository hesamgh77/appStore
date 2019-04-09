import { FORM_UPDATE, CREATE_FORM } from '../actions/types';

const INITIAL_STATE = { appName: '', constructor: '', subject: '', description: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_FORM:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
