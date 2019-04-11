import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class AppDetail extends Component {
    render() {
        return (
            <View style={styles.hesam}>
                 <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle}
                    />
                 </View>
                 <Text style={styles.item}>{this.props.myapp.name}</Text>

            </View>
        );
    }
}

//#008CBA
const styles = {
    item: {
      fontSize: 18,
      height: 44,
      letterSpacing: 3,
      color: '#008CBA',
      textAlign: 'justify'
    },
    hesam: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 20

    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
  };
  
export default AppDetail;
