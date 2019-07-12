import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
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
import profile from './components/profile';
import category from './components/category';
import SubjectApp from './components/SubjectApp';

const homeStack = createStackNavigator(
    {
      Home: AppList,
      Details: AppPage,
    },
    /*
    {
      secondHome: AppPage
    },
    {
      
      thirdHome: AppPage
    },
    */
    //{
      //  headerMode: 'none',
    //},
    {
        //initialRouteName: 'Home',
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
const profileStack = createStackNavigator(
  {
    profile: profile,
    Details: AppPage,
    login: LoginForm,
    signup: SignupForm,
    createApp: RegisterAppForm,

  },
  {
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
const categoryStack = createStackNavigator(
  {
    category: category,
    SubjectApp: SubjectApp,
  },
  {
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
//const AppContainer = createAppContainer(profileStack);
const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    profile: profileStack,
    category: categoryStack,
    Home: homeStack,
    //categorize: categorizeStack,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      //activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14,
        //textAlign: 'center',
        //flex: 1,
        //justifyContent: 'center'
      },
      /*tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      style: {
        alignSelf: 'center'
      }*/
      //style: { , justifyContent: 'center' }
    },
  }
));
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
