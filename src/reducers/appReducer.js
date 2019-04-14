import { FORM_UPDATE, CREATE_FORM } from '../actions/types';

const INITIAL_STATE = { appName: '', constructor: '', subject: '', description: '', error: '', loading: false, filePath: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_FORM: //send data to server

        /*
    RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
            // dropbox upload headers
            Authorization : "Bearer access-token...",
            'Dropbox-API-Arg': JSON.stringify({
            path : '/img-from-react-native.png',
            mode : 'add',
            autorename : true,
            mute : false
            }),
            'Content-Type' : 'application/octet-stream',
            // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
            // Or simply wrap the file path with RNFetchBlob.wrap().
    }, RNFetchBlob.wrap(filePath))
    .then((res) => {
        console.log(res.text())
    })
    .catch((err) => {
    // error handling ..
    })

        */
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};
