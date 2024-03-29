import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Button } from './common';
//                <Text>{this.props.myapp.subject}</Text>

class SubjectDetail extends Component {
    render() {
        return (
            <View style={{flex: 1, marginBottom: 25 }} >
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <Button
                    onPress={() => this.props.navigation.navigate('AppListCategory', {
                    Subject: this.props.myapp.subject })}
                    >
                        <Text style={{color: '#3cb371' }}>{this.props.myapp.subject}</Text>
                    </Button>
                </CardSection>
            </View>
        );
    }
}
export default SubjectDetail;
