import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, CardSection, Input } from './common';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="email"
                        placeholder="xxx@yahoo.com"
                    />
                </CardSection>

                <CardSection style={{ marginBottom: 15 }}>
                    <Input 
                        label="password"
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <CardSection style={{ borderBottomWidth: 0 }}>
                   <Button>
                       Login
                   </Button>
                </CardSection>

            </View>
         
        );
    }
}
export default LoginForm;
