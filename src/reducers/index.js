import { combineReducers } from 'redux';
import appReducer from './appReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import AllAppReducer from './AllAppReducer';
import profileReducer from './profileReducer';
import bookmarkInfo from './bookmarkReducer';

export default combineReducers({
    app: appReducer,
    user: userReducer,
    loginUser: loginReducer,
    allApp: AllAppReducer,
    profileUser: profileReducer,
    bookmarkInfo: bookmarkInfo
});
