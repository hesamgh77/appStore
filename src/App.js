import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
//import { Header } from './components/common';
//import RegisterAppForm from './components/RegisterAppForm';
//import AppList from './components/AppList';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1, backgroundColor: '#000' }}>
                   <Router />
                </View>
            </Provider>
           
            );
    }
}
export default App;
