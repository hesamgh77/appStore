import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class AppDetail extends Component {
    render() {    
        var myuri= "http://192.168.1.106:8000";
        myuri += this.props.myapp.image;
        //console.log(myuri);    
        return (
            <View style={styles.hesam}>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle}
                        source={{ uri: myuri }}
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
      //letterSpacing: 3,
      color: 'black',
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
    },
    imageStyle: {
        height: 50,
        width: 50
    }
  };
  
export default AppDetail;
