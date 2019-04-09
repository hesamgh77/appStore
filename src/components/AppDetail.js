import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AppDetail extends Component {
    render() {
        return (
            <View style={styles.hesam}>
                 <Text style={styles.item}>{this.props.myapp.family}</Text>
            </View>
        );
    }
}


const styles = {
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    hesam: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
  };
  
export default AppDetail;
