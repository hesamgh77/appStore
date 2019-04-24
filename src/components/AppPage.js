import React, { Component } from 'react';
import { Text } from 'react-native';
class AppPage extends Component {
    render() {
        const { navigation } = this.props;
        const myapp = navigation.getParam('myApp', 'nothing');
        console.log(myapp);
        return (
            <Text>{ myapp.name }</Text>
        );
    }
}
export default AppPage;
