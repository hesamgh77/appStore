import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import SubjectDetail from './SubjectDetail';

class category extends Component {
    /*
    ('weather_app', 'weather_app'),
    ('education_app', 'education_app'),
    ('tools_app', 'tools_app'),
    ('cooking_app', 'cooking_app'),
    ('lifestyle_app', 'lifestyle_app'),
    ('health_app', 'health_app'),
    */
    
    
    static navigationOptions = {
        title: 'Category',
        headerTitleStyle: { textAlign: 'center', flex: 1 }
    }
    state = { 
        all_subject: []
    }
    componentWillMount() {
        this.setState({ all_subject: [{ subject: 'action_game' }, { subject: 'weather_app' }, { subject: 'puzzle_game' }, { subject: 'education_app' }, { subject: 'driver_game' }, { subject: 'tools_app' }, { subject: 'score_game' }, { subject: 'cooking_app' }] });
    }
    renderApp(myapp) {
        //console.log('*********');
        //console.log(myapp);
        return (
            <SubjectDetail myapp={myapp} />
        );
    }
    render() {
        //console.log('ajdjahdj');
        //console.log(this.state.all_subject);
        return (
            <FlatList 
                style={styles.container}
                columnWrapperStyle={styles.heasm}
                //data={this.state.apiApp}
                data={this.state.all_subject}
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
export default category;
