import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
//import fetch from 'react-native-fetch';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';

/// const image = require('asasdasdsad');

class AppList extends Component {
    //const myIp='http://192.168.43.195:8000';
    state={
        allapp: [{ name: 'Telegram', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'hesasm', family: 'gholami' }, { name: 'hesasm', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }],
        apiApp: []
    };
    //192.168.232.2
    //192.168.1.102

    //151.239.247.39 //*****************correct */
    
    
    constructor() {
        super();
        console.log('golabi');
        fetch('http://192.168.43.195:8000/app/', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data);
            this.setState({ apiApp: data });
        })
        .catch((error) => {
        console.error(error);
        });
        
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
            
            <AppDetail myapp={myapp} />
        );
    }
    render() {
        return (
            <FlatList 
                style={styles.container}
                columnWrapperStyle={styles.heasm}
                data={this.state.apiApp}
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
export default AppList;
