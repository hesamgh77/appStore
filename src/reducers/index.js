import { combineReducers } from 'redux';
import appReducer from './appReducer';
import appDetailReducer from './appDetailReducer';

export default combineReducers({
    app: appReducer,
    DetailApp: appDetailReducer
});
