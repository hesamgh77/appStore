import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Input } from './common';
import { LoginformUpdate, login } from '../actions';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login'
    }
    afterLogin = () => {
        if (this.props.isLogin) {
            this.props.navigation.goBack();
            this.props.navigation.navigate('Home');
        }
    }
    please() {
        if (this.props.isLogin) {
            this.props.navigation.goBack();
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="username"
                        placeholder="hesam_ghh"
                        value={this.props.username}
                        onChangeText={text => this.props.LoginformUpdate({ prop: 'username', value: text })}
                    />
                </CardSection>

                <CardSection style={{ marginBottom: 15 }}>
                    <Input 
                        label="password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={text => this.props.LoginformUpdate({ prop: 'password', value: text })}
                        secureTextEntry
                    />
                </CardSection>

                <CardSection style={{ borderBottomWidth: 0 }}>
                   <Button onPress={() => { this.props.login(this.props.username, this.props.password); }}>
                       Login
                   </Button>
                </CardSection>
                {this.afterLogin()}

            </View>
         
        );
    }
}
const mapStateToProps = state => {
    return {
        username: state.loginUser.username,
        password: state.loginUser.password,
        token: state.loginUser.token,
        isLogin: state.loginUser.isLogin
    };
};
//export default LoginForm;
export default connect(mapStateToProps, { LoginformUpdate, login })(LoginForm);
