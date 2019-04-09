
import React from 'react';
import { Text, View } from 'react-native';

const Header = (propss) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{propss.thing}</Text>
        </View>
    );
};
const styles = {
    
    textStyle: {
        fontSize: 20

    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        position: 'relative',
        elevation: 2  
    }
};

export { Header };
