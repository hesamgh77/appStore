import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AppList from './components/AppList';
import RegisterAppForm from './components/RegisterAppForm';
import plusIcon from './Image/add-1.png';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" >
                <Scene
                right
                titleStyle={{ textAlign: 'center', flex: 1 }}
                rightButtonImage={plusIcon}
                //rightTitle="Add"
                onRight={() => Actions.appForm()}
                key="HomePage"
                component={AppList}
                title="AppStore"
                initial 
                />
                <Scene key="appForm" component={RegisterAppForm} title="NewApp" />
            </Scene>
        </Router>
    );
};
export default RouterComponent;
