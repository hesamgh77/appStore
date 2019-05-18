import { combineReducers } from 'redux';
import appReducer from './appReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    app: appReducer,
    user: userReducer,
    loginUser: loginReducer
});
