import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { signout } from '../actions';
////////////////*
/*
<View style={{ flex: 1 }}>
                <Text>{this.props.userProfile.first_name}</Text>
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
            </View>
*/
/*
<View style={{ justifyContent: 'center', flex: 1 }}>
                {this.renderLoginAndSignUp()}
            </View>
*/
class profile extends Component {
    state = {};
    static navigationOptions = {
        title: 'Profile',
        headerTitleStyle: { textAlign: 'center', flex: 1 },
    }
    componentWillMount() {
        this.setState({ userProfile: this.props.userProfile });
        console.log('this is state:');
        console.log(this.state);
    }
    renderLoginAndSignUp = () => {
        if (this.props.isLogin === false) {
            return (
            <View style={{ marginTop: 200 }}>
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
            //console.log(this.props.userProfile);
            //console.log(this.props.userProfile.length);
            if (typeof this.props.userProfile !== "undefined") {
                console.log("*/**/**//**/");
                console.log(this.props.userProfile);
                var userProf = this.props.userProfile[0];
                if (typeof userProf === "undefined") {
                    return (null);
                }
                var Profile_user = this.props.userProfile[0];
                return (
                    <View>
                        <View style={styles.profileContainerStyle}>
                            <Text style={styles.textStyle}>{Profile_user.first_name} {Profile_user.last_name}</Text>
                            <Text style={styles.textStyle}>{Profile_user.username}</Text>
                            <Text style={styles.textStyle}>{Profile_user.email}</Text>
                            <Text style={styles.textStyle}>{Profile_user.mobile_number}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
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
                    </View>
                );
            }
            else {
                return (null);
            }
        }
    }
    render() {
        return (
            <View>
                {this.renderLoginAndSignUp()}
            </View>
        );
    }
}
//export default profile;
const styles = {
    profileContainerStyle: {
        //justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        marginTop: 20
    },
    textStyle: {
        fontSize: 20,
        color: 'green',
        marginBottom: 25,
        fontWeight: '600'
    }
};
const mapStateToProps = state => {
    return {
        isLogin: state.loginUser.isLogin,
        userProfile: state.profileUser.userProfile
    };
};
export default connect(mapStateToProps, { signout })(profile);

