import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';

class AppList extends Component {
    state={
        allapp: [{ name: 'Telegrammmmmmmm', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'hesasm', family: 'gholami' }, { name: 'hesasm', family: 'gholami' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }, { name: 'WhatsApp', family: 'sanee' }],
        apiApp: []
    };
    componentWillMount() {
        axios.get()
        .then(response => this.setState({ apiApp: response.data }));
    }
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
                data={this.state.allapp}
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
