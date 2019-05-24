import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import DetailScreen from '../DetailScreen';
import HomeScreen from './HomeScreen';
import LoginForm from '../components/LoginForm';

const RootStack = createStackNavigator(
    {
      Home: LoginForm,
      Details: DetailScreen,

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

export default class App extends React.Component {
    render() {
      return (

        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <AppContainer />
        </Provider>
      );
    }
  }
