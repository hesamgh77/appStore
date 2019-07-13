import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { subject_api } from '../config';
import AppDetail from './AppDetail';

class AppListCategory extends Component {
    state = { all_app: {} };
    componentWillMount() {
        const { navigation } = this.props;
        const subject = navigation.getParam('Subject', 'nothing');
        const url = subject_api + subject;
        console.log(url);
        RNFetchBlob.fetch('GET', url, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
        .then((data) => data.json())
        .then((res) => {
            this.setState({ all_app: res });
            console.log(res);
        })
        .catch((error) => console.log(error));
    }
    renderApp(myapp) {
        return <AppDetail myapp={myapp} navigation={this.props.navigation} />;
    } 
    render() {
        return (
                <FlatList 
                    style={styles.container}
                    columnWrapperStyle={styles.heasm}
                    //data={this.state.apiApp}
                    data={this.state.all_app}
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
        backgroundColor: 'white',
        marginBottom: 40,
       },
    hesam: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export default AppListCategory;
