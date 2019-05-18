import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
//import fetch from 'react-native-fetch';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';
import { all_app_url } from '../config';


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
    
    constructor() {
        super();
        console.log('golabi');
        //http://192.168.1.102:8000/app/
        fetch(all_app_url, {
            method: 'GET',
           /* headers: {
                'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6Imhlc2FtX2doaCIsImV4cCI6MTU1ODE3NTUxMCwiZW1haWwiOiJoZXNhbV9naG9sYW1pQHlhaG9vLmNvbSIsIm9yaWdfaWF0IjoxNTU4MTcwMTEwfQ.XVRrMPhTMUP7fO4P8LbB79VAxMMySX-rVE8R9GJcM5c'
            }
            */
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
            
            <AppDetail myapp={myapp} navigation={this.props.navigation} />
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
