import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Input, Spinner } from './common';
import { LoginformUpdate, login } from '../actions';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login'
    }
    //Invalid password or userName. Please try again
    renderSpinner() {
        let username = this.props.username.toLowerCase();
        if (this.props.loading) {
            return <Spinner size='large' />; 
        } else {
                return (
                   <Button onPress={() => { this.props.login(username, this.props.password, this.props.navigation); }}>
                       <Text style={{ color: '#3cb371' }}>Login</Text>
                   </Button>
                );
        }
    }

    renderUsernameError() {
        if (this.props.isUsernameEmpty) {
            return (
                <Text style={styles.errorTextStyles}>Empty</Text>
            );
        }
    }
    renderPasswordError() {
        if (this.props.isPasswordEmpty) {
            return (
                <Text style={styles.errorTextStyles}>Empty</Text>
            );
        }
    }    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CardSection style={{ borderColor: '#b4b4b4' }} >
                    <Input
                        label="username"
                        placeholder="hesam_ghh"
                        value={this.props.username}
                        onChangeText={text => this.props.LoginformUpdate({ prop: 'username', value: text })}
                    />
                </CardSection>
                {this.renderUsernameError()}
                <CardSection style={{ borderColor: '#b4b4b4' }}>
                    <Input 
                        label="password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={text => this.props.LoginformUpdate({ prop: 'password', value: text })}
                        secureTextEntry
                    />
                </CardSection>
                {this.renderPasswordError()}
                <Text style={styles.errorTextStyles}>{this.props.invalidErrorMessage}</Text>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    {this.renderSpinner()}
                </CardSection>
            </View>
         
        );
    }
}
const styles = {
    errorTextStyles: {
        fontSize: 15,
        //fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    }
};
const mapStateToProps = state => {
    return {
        username: state.loginUser.username,
        password: state.loginUser.password,
        token: state.loginUser.token,
        isLogin: state.loginUser.isLogin,
        isError: state.loginUser.isError,
        invalidErrorMessage: state.loginUser.invalidErrorMessage,
        loading: state.loginUser.loading,
        isPasswordEmpty: state.loginUser.isPasswordEmpty,
        isUsernameEmpty: state.loginUser.isUsernameEmpty
    };
};
//export default LoginForm;
export default connect(mapStateToProps, { LoginformUpdate, login })(LoginForm);
