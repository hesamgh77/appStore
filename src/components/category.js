import React, { Component } from 'react';
import { Text } from 'react-native';

class category extends Component {
    static navigationOptions = {
        title: 'Category',
        headerTitleStyle: { textAlign: 'center', flex: 1 }
    }
    render() {
        return (
            <Text>category</Text>
        );
    }
}
export default category;
