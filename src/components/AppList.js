import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
//import fetch from 'react-native-fetch';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';
import { all_app_url } from '../config';
import { getAllApp } from '../actions';


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
    //const myIp='http://192.168.43.195:8000';
    state={
        allapp: [{ name: 'Telegram', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'hesasm', family: 'gholami' }, { name: 'hesasm', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }],
        apiApp: []
    };
    //192.168.232.2
    //192.168.1.102

    //151.239.247.39 //*****************correct */
    componentWillMount() {

        this.props.getAllApp();
    }
    constructor() {
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
       console.log('start of cons');
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
    */
    }

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
    render() {
        //this.props.getAllApp();
        //console.log('sj');
        console.log(this.props.apiapp);
        console.log(this.props.apiapp.length);
        if (this.props.apiapp.length == 0) {
            return (null);
        }
        return (
            <FlatList 
                style={styles.container}
                columnWrapperStyle={styles.heasm}
                //data={this.state.apiApp}
                data={this.props.apiapp}
                numColumns='3'
                renderItem={({ item }) =>
                this.renderApp(item)
            }
            />
        ); 
    }

}

//rgb(255,200,150)
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
        apiapp: state.allApp.apiApp,
        refresh: state.allApp.refresh
    };
};
//export default AppList;
export default connect(mapStateToProps, { getAllApp })(AppList); 
