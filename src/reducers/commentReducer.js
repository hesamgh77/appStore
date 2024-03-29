import { GET_ALL_COMMENT, UPDATE_COMMENTS, COMMENT_FORM_UPDATE, CREATE_COMMENT, DELETE_ALL_COMMENT, SUCCESS_SET_RATE, REAPETABLE_SET_RATE } from '../actions/types';

const INITIAL_STATE = { allComment: {}, comment: null, messageRate: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_COMMENT:
            return { ...state, allComment: action.payload };
        case COMMENT_FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_COMMENT:
            return { ...state, ...INITIAL_STATE };
        case UPDATE_COMMENTS:
            return { ...state, [action.payload.prop]: action.payload.value };
        case DELETE_ALL_COMMENT:
            return { ...INITIAL_STATE };
        case SUCCESS_SET_RATE:
            return { ...state, messageRate: 'success' };
        case REAPETABLE_SET_RATE:
            return { ...state, messageRate: 'rated before' };
        default:
            return { ...state };
    }
};
