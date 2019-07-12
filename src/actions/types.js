//*Create App/ ----> appReducer.js &&&&&& actions > index.js
export const FORM_UPDATE = 'form_update';
export const CREATE_FORM = 'create_form';
export const ENABLE_LOADING = 'enable_loading';
export const DISABLE_LOADING = 'disable_loading';
export const REMOVE_CREATEAPP_MESSAGE = 'remove_createapp_message';
////////////////////////////////////////////////////////////

//*Signup/ -----> userReducer.js &&&&& actions > index.js
export const SIGNUP_UPDATE = 'signup_update';
export const SIGNUP_SUCCESS = 'signup_success';
export const SIGNUP_FAIL = 'signup_fail';
export const SIGNUP_REMOVE_MESSAGE = 'signup_remove_message';
////////////////////////////////////////////////////////////

//*Login/ -----> loginReducer.js &&&&& actions > index.js
export const LOGIN_UPDATE = 'login_update';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';
export const REMOVE_ERROR_LOGIN = 'remove_error_login';
export const LOGIN_LOADING = 'login_loading';
export const UPDATE_PROFILE = 'update_profile';
export const SIGN_OUT = 'signout';
////////////////////////////////////////////////////////////

//* Show HomePage ------> allAppReducer.js &&&&& actions > index.js
export const GET_ALL_APP = 'get_all_app';
export const UPDATE_HOME_PAGE = 'update_home_page';
////////////////////////////////////////////////////////////

//*Bookmark ------> bookmarkReducer.js &&&&&&&&& actions.index.js
export const ONSTAR = 'onstar';
export const OFFSTAR = 'offstar';

export const GET_ALL_COMMENT = 'get_all_comment';
export const UPDATE_COMMENTS = 'updtae_comments';
export const COMMENT_FORM_UPDATE = 'comment_form_update';
export const CREATE_COMMENT = 'create_comment';
