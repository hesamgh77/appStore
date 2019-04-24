import React from 'react';
import { Text, View, Button } from 'react-native';

class DetailScreen extends React.Component {
    /*static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        // Notice the logs ^
        // sometimes we call with the default navigationOptions and other times
        // we call this with the previous navigationOptions that were returned from
        // this very function
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          //headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };
    */
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
              })}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
export default DetailScreen;
