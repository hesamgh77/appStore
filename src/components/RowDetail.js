import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { base_api } from '../config';

class RowDetail extends Component {
    render() {    
        var myuri= base_api;
        myuri += this.props.myapp.image;
        //console.log(myuri);    
        //console.log(this.props.myapp);
        return (
            <View style={styles.hesam}>                            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
                myApp: this.props.myapp.id
            })}
            >
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle}
                        source={{ uri: myuri }}
                    />
                </View>
                    <Text style={styles.item}>{this.props.myapp.name}</Text>
                </TouchableOpacity>

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
        marginBottom: 20,
        margin: 30

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
  
export default RowDetail;
