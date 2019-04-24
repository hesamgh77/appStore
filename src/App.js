import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppList from './components/AppList';
import RegisterAppForm from './components/RegisterAppForm';
import reducers from './reducers';
//import { Header } from './components/common';
//import RegisterAppForm from './components/RegisterAppForm';
//import AppList from './components/AppList';
import Router from './Router';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AppPage from './components/AppPage';

const RootStack = createStackNavigator(
    {
      Home: AppList,
      Details: AppPage,
    },
    {
      secondHome: AppList 
    },
    {
      
      thirdHome: AppPage
    },
    //{
      //  headerMode: 'none',
    //},
    {
        initialRouteName: 'Home',
        //headerMode: 'none',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
               
    }
    
  );
const AppContainer = createAppContainer(RootStack);

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <AppContainer />
            </Provider>
           
            );
    }
}
export default App;
