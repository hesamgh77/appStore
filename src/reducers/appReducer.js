import { FORM_UPDATE, CREATE_FORM, REMOVE_CREATEAPP_MESSAGE, ENABLE_LOADING, DISABLE_LOADING } from '../actions/types';

const INITIAL_STATE = { appName: '', constructor: '', subject: '', description: '', error: '', loading: false, apk_file: '', image_file: '', file_size: '', imageName: 'Click Here for choosing Image ...', fileName: 'Click Here for choosing File ...', isSuccess: null };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_FORM: //send data to server
            return { ...state, ...INITIAL_STATE, isSuccess: true };
        case REMOVE_CREATEAPP_MESSAGE:
            return { ...state, isSuccess: null };
        case ENABLE_LOADING:
            return { ...state, loading: true };
        case DISABLE_LOADING:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
};
