import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { signupUpdate, signup, remove_update_message } from '../actions';
import { Button, CardSection, Input } from './common';

//[A-Za-z\d]{9,}@[a-z]{6,}[.](com)$
class SignupForm extends Component {
    static navigationOptions= {
        title: 'Signup',        
    }
    state = {
        firstname_error: '',
        lastname_error: '',
        username_error: '',
        phone_error: '',
        email_error: '',
        password_error: ''
    }
    checkField = () => {
        const regular_expression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
        console.log(regular_expression.test('ghghgh1300'));
        let value = 1;
        let example = '511515aahd';
        if (this.props.firstname.length == 0) {
            //console.log(this.props.firstname.length);
            this.setState({ firstname_error: 'empty' });
            //this.state.firstname_error = 'empty';
            value = 0;
        } else {
            this.setState({ firstname_error: '' });
        }
        if (this.props.lastname.length == 0) {
            this.setState({ lastname_error: 'empty' });
            //this.state.lastname_error = 'empty';
            value = 0;
        } else {
            this.state.lastname_error = '';
            this.setState({ lastname_error: '' });
        }
        if (this.props.username.length == 0) {
            this.setState({ username_error: 'empty' });
            value = 0;
        } else {
            this.setState({ username_error: '' });
        }
        if (this.props.phone.length == 11) {
            this.setState({ phone_error: '' });
        } else {
            if (this.props.phone.length == 0) {
                this.setState({ phone_error: 'empty' });
                value = 0;
            } else {
                this.setState({ phone_error: 'phone number should be 11 digit' });
                value = 0;
            }
        }
        if (this.props.password.length == 0) {
            //console.log(this.props.firstname.length);
            this.setState({ password_error: 'empty' });
            //this.state.firstname_error = 'empty';
            value = 0;
        } else { 
            if (regular_expression.test(this.props.password)) {
                this.setState({ password_error: '' });
            }
            else {
                value = 0;
                this.setState({ password_error: 'error' });
            }
        }
        if (this.props.email.length == 0) {
            //console.log(this.props.firstname.length);
            this.setState({ email_error: 'empty' });
            //this.state.firstname_error = 'empty';
            value = 0;
        } else {
            this.setState({ email_error: '' });
        }
        console.log(this.state);
        if (value == 0) {
            return false;
        } else {
            return true;
        }
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
                <Text style={styles.errorTextStyles}>{this.state.firstname_error}</Text>

                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="lastname"
                        placeholder="gholami"
                        value={this.props.lastname}
                        onChangeText={text => this.props.signupUpdate({ prop: 'lastname', value: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.lastname_error}</Text>
               
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="username"
                        placeholder="hessam_gh"
                        value={this.props.username}
                        onChangeText={text => this.props.signupUpdate({ prop: 'username', value: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.username_error}</Text>
                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="phone"
                        placeholder="09122365478"
                        value={this.props.phone}
                        onChangeText={text => this.props.signupUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.phone_error}</Text>

                <CardSection /*style={{ borderTopWidth: 1 }}*/>
                    <Input
                        label="email"
                        placeholder="xxx@yahoo.com"
                        value={this.props.email}
                        onChangeText={text => this.props.signupUpdate({ prop: 'email', value: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.email_error}</Text>
                <CardSection>
                    <Input 
                        label="password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={text => this.props.signupUpdate({ prop: 'password', value: text })}
                        secureTextEntry
                    />
                </CardSection>
                <Text style={styles.errorTextStyles}>{this.state.password_error}</Text>

                <View style={{ alignItems: 'center' }}>
                    {this.renderMessage()}
                </View>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <Button
                     onPress={() => {
                        this.props.remove_update_message();
                        if (this.checkField()) {
                            console.log('true');
                            this.props.signup(this.props.firstname, this.props.lastname, this.props.username, this.props.phone, this.props.email, this.props.password);
                        }
                        }
                    }
                    >
                       Signup
                   </Button>
                </CardSection>
            </View>
            </ScrollView>
         
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
export default connect(mapStateToProps, { signupUpdate, signup, remove_update_message })(SignupForm);
//export default SignupForm;
