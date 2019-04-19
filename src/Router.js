import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AppList from './components/AppList';
import RegisterAppForm from './components/RegisterAppForm';
//import plusIcon from './Image/add-1.png';

const RouterComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <Router>
                <Scene key="root" >
                    <Scene
                    titleStyle={{ textAlign: 'center', flex: 1 }}
                    //rightButtonImage={plusIcon}
                    //rightTitle="Add"
                    //leftButtonImage={plusIcon}
                    //onRight={() => Actions.appForm()}
                    key="HomePage"
                    component={AppList}                
                    title="AppStore"
                    initial 
                    
                    />
                    <Scene key="appForm" component={RegisterAppForm} title="NewApp" />
                </Scene>            
            </Router>
        </View>

    );
};
export default RouterComponent;
