import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1, //1
        padding: 5,
        //marginBottom: 10, // not
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#999',
        position: 'relative'
    }
};

export { CardSection };

