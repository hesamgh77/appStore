import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { myimage } from '../Image/add.png';

class AppDetail extends Component {
    render() {
        return (
            <View style={styles.hesam}>
                    <Image 
                        style={styles.imageStyle}
                    />
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
      //letterSpacing: 3,
      color: 'orange',
      textAlign: 'justify'
    },
    hesam: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 20

    },
    thumbnailStyle: {
        height: 20,
        width: 20
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 20,
        flex: 1,
        width: null
    }
  };
  
export default AppDetail;
