import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { signout } from '../actions';

class profile extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerTitleStyle: { textAlign: 'center', flex: 1 },
    }
    renderLoginAndSignUp = () => {
        if (this.props.isLogin === false) {
            return (
            <View style = {{justifyContent: 'center', flex: 1}}>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <Button onPress={() => this.props.navigation.navigate('login')}>
                        login
                    </Button>
                </CardSection>

                <CardSection style={{ borderBottomWidth: 0 }}>
                    <Button onPress={() => this.props.navigation.navigate('signup')}>
                        signup
                    </Button>
                </CardSection>

                
            </View>
            );
        }
        else {
            return (
            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                <CardSection style={{ borderBottomWidth: 0 }} >
                    <Button onPress={() => this.props.navigation.navigate('createApp')}>
                        create App
                    </Button>
                </CardSection>
                <CardSection style={{ borderBottomWidth: 0 }} >
                    <Button onPress={() => { this.props.navigation.navigate('Home'); this.props.signout(); }}>
                        Signout
                    </Button>
                </CardSection>
            </View>
            );
        }
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                {this.renderLoginAndSignUp()}
            </View>
        );
    }
}
//export default profile;
const mapStateToProps = state => {
    return {
        isLogin: state.loginUser.isLogin
    };
};
export default connect(mapStateToProps, { signout })(profile);

