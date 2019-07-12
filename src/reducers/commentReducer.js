import { GET_ALL_COMMENT, UPDATE_COMMENTS, COMMENT_FORM_UPDATE, CREATE_COMMENT } from '../actions/types';

const INITIAL_STATE = { allComment: {}, comment: null };
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
        default:
            return { ...state };
    }
};
