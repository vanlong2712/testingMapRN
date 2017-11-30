import React, {Component} from 'react';
import {
    View, 
    Image,
    Dimensions
} from 'react-native';

const NextPrevButton = ({prop}) => {
    const {prev, next, button} = styles;

    return (
        <View>
            <Image 
                source={require('../../../assets/images/pre_page.png')} 
                style={{...prev, ...button}}
            />
            <Image 
                source={require('../../../assets/images/next_page.png')} 
                style={{...next, ...button}}
            />
        </View>
    );
};

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles ={
    button: {
        height: 30,
        width: 30,
        top: -33,
        shadowColor: '#000000',        
        shadowRadius: 15,
        shadowOpacity: 0.4,
        borderRadius: 15,
        position: 'absolute',
    },
    prev: {
        left: 0,         
    },
    next: {
        right: 0, 
        
    }
}

export default NextPrevButton;