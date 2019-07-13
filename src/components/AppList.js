import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
//import fetch from 'react-native-fetch';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';
import RowDetail from './RowDetail';
import { all_app_url } from '../config';
import { getAllApp, getPopularApp } from '../actions';

class AppList extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: { textAlign: 'center', flex: 1 },

       /*
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        */
    }
    /*
    constructor(props) {
        super(props);
        this.props.getAllApp();
    }
    */
    state={
        apiApp: []
    };
    componentWillMount() {
        this.props.getAllApp();
        this.props.getPopularApp();
        //this.props.getPopularApp();
    }
    keyExtractor = (item) => item.id;
    /*constructor() {
        super();
        /*
        console.log('golabi');
        fetch(all_app_url, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data);
            this.setState({ apiApp: data });
        })
        .catch((error) => {
        console.error(error);
        });
        */
       //console.log('start of cons');
       //this.props.getAllApp();
       //console.log(this.props.apiApp);
        /*
        //'http://127.0.0.1:8000/media/image_files/logotype-telegram-round-blue-logo-512.png'
        axios.get('192.168.1.102:8000/app/')
        .then(response => {
            this.setState({ apiApp: response.data });
            console.log(response.data);               
        })
        .catch(error => console.log(error));
    
    }
    */
    

    /*
    fetchDataFromApi = () => {
        const url = ""
    }
    */
   
    renderApp(myapp) {
        return (
            <AppDetail myapp={myapp} navigation={this.props.navigation} />
        );
    }
    renderRow(myapp) {
        return (
            <RowDetail myapp={myapp} navigation={this.props.navigation} />
        );
    }
    render() {
        //console.log(this.props.apiapp);
        //console.log(this.props.apiapp.length);
        if (this.props.apiapp.length == null) {
            return (null);
        }
        if (typeof this.props.apiapp == 'undefined') {
            return (null);
        }
        return (
        <View style={{flex: 1}}>
            <FlatList 
                style={styles.container}
                columnWrapperStyle={styles.heasm}
                //data={this.state.apiApp}
                data={this.props.apiapp}
                numColumns='3'
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) =>
                this.renderApp(item)
            }
            />
            <Text style={styles.popularTextStyle}>Popular App</Text>
            <FlatList 
                style={styles.popularContainer}
                //data={this.state.apiApp}
                data={this.props.popularApp}
                horizontal='true'
                keyExtractor={this.keyExtractor}
                renderItem={({ item }) =>
                this.renderRow(item)
            }
            />
        </View>

        ); 
    }

}
//rgb(255,200,150)
const styles = {
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white',
        marginBottom: 40
       },
    hesam: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    popularContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    popularTextStyle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    }
   
};
const mapStateToProps = state => {
    return {
        apiapp: state.allApp.apiApp,
        token: state.loginUser.token,
        popularApp: state.allApp.popularApp
    };
};
//export default AppList;
export default connect(mapStateToProps, { getAllApp, getPopularApp })(AppList); 
