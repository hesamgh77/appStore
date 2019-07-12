import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import AppDetail from './AppDetail';
import { getBookmarkedApp } from '../actions';

class Bookmark extends Component {
    componentWillMount() {
        var profile_user = this.props.userProfile[0];
        console.log(profile_user.id);
        this.props.getBookmarkedApp(profile_user.id, this.props.token);
    }
    renderApp(myapp) {
        return (
            <AppDetail myapp={myapp} navigation={this.props.navigation} />
        );
    }
    render() {
            return (
                <FlatList
                style={styles.container}
                columnWrapperStyle={styles.heasm}
                data={this.props.bookmarkedApp}
                numColumns='2'
                renderItem={({ item }) =>
                this.renderApp(item)
                }
                />
                );
    }
}
const styles = {
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white'
       },
    hesam: {
        justifyContent: 'center',
        alignItems: 'center'
    } 
};
const mapStateToProps = state => {
    return {
        bookmarkedApp: state.bookmarkReducer.bookmarkedApp,
        userProfile: state.profileUser.userProfile,
        token: state.loginUser.token
    };
};
export default connect(mapStateToProps, { getBookmarkedApp })(Bookmark);
