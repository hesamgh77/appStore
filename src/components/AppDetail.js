import React, { Component } from 'react';
import { Text } from 'react-native';

class AppDetail extends Component {
    render() {
        return (
            <Text>{this.props.myapp.family}</Text>
        );
    }
}
export default AppDetail;
