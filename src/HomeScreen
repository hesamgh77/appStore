import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailScreen from './DetailScreen';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
    /*headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#f4511e"
      />
    ),*/
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

/*const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Details: DetailScreen,
  },
  {
    initialRouteName: 'Home', 
  }
);
*/
//export default createAppContainer(AppNavigator);
export default HomeScreen;
