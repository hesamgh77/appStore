import React, { Component } from 'react';
import { FlatList } from 'react-native';
//import { List, ListItem} from 'react-native-elements';
import AppDetail from './AppDetail';

class AppList extends Component {
    state={ allapp: [{ name: 'hesasm', family: 'gholami' }, { name: 'mohammad', family: 'sanee' }, { name: 'hesasm', family: 'gholami' }, { name: 'hesasm', family: 'gholami' }] };
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
const styles = {
    container: {
        flex: 1,
        paddingTop: 22
       },
    hesam: {
        justifyContent: 'center',
        alignItems: 'center'
    }
   
};
export default AppList;
