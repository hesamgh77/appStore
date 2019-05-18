import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { signupUpdate, signup } from '../actions';
import { Button, CardSection, Input } from './common';


class SignupForm extends Component {
    static navigationOptions= {
        title: 'Signup',        
    }
    renderMessage() {
        if (this.props.isSuccess === true) { 
                return (<Text style={{ color: 'green', fontSize: 20 }}>success</Text>);
                //this.props.navigation.goBack();  
        }
        if (this.props.isSuccess === false) {
                return (
                <Text style={{ color: 'red', fontSize: 20 }}>failed</Text>
                );
            }
    }
    render() {
        return (
            <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="firstname"
                        placeholder="hessam"
                        value={this.props.firstname}
                        onChangeText={text => this.props.signupUpdate({ prop: 'firstname', value: text })}
                    />
                </CardSection>

                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="lastname"
                        placeholder="gholami"
                        value={this.props.lastname}
                        onChangeText={text => this.props.signupUpdate({ prop: 'lastname', value: text })}
                    />
                </CardSection>
               
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="username"
                        placeholder="hessam_gh"
                        value={this.props.username}
                        onChangeText={text => this.props.signupUpdate({ prop: 'username', value: text })}
                    />
                </CardSection>
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="phone"
                        placeholder="09122365478"
                        value={this.props.phone}
                        onChangeText={text => this.props.signupUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="email"
                        placeholder="xxx@yahoo.com"
                        value={this.props.email}
                        onChangeText={text => this.props.signupUpdate({ prop: 'email', value: text })}
                    />
                </CardSection>

                <CardSection style={{ marginBottom: 15 }}>
                    <Input 
                        label="password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={text => this.props.signupUpdate({ prop: 'password', value: text })}
                        secureTextEntry
                    />
                </CardSection>
                <View style={{ alignItems: 'center' }}>
                    {this.renderMessage()}
                </View>
                <CardSection style={{ borderBottomWidth: 0 }}>
                   <Button onPress={() => this.props.signup(this.props.firstname, this.props.lastname, this.props.username, this.props.phone, this.props.email, this.props.password)}>
                       Signup
                   </Button>
                </CardSection>
            </View>
            </ScrollView>
         
        );
    }
}
const mapStateToProps = state => {
    return {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        username: state.user.username,
        phone: state.user.phone,
        email: state.user.email,
        password: state.user.password,
        isSuccess: state.user.isSuccess,
        isLogin: state.loginUser.isLogin
    };
};
export default connect(mapStateToProps, { signupUpdate, signup })(SignupForm);
//export default SignupForm;
