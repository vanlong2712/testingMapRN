import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Information = ({ prop }) => {
    const { container, background, view_style, screen_title, screen_name } = styles;
    return (
        <View style={container}>
            <View style={view_style}>
                <Image 
                    style={background}
                    source={require('../../../assets/images/infor_background.png')} 
                />
            </View>
            <View>
                <Text style={screen_title} >This is the title of the information</Text>
                <Text style={screen_name} >This is the name of the information </Text>
            </View>
        </View>
        // <View>
        //     <LinearGradient colors={['#56CCF2', '#2F80ED']} style={view_style}>
        //         <Text style={screen_title} >this is the title of information</Text>
        //         <Text style={screen_name} >this is the name of information </Text>
        //     </LinearGradient>
        // </View>
    );
};
const ScreenWidth = Dimensions.get("window").width;
const resizeMode = 'center';
const styles = {
    container: {
        width: ScreenWidth,
        height: 90,
    },
    view_style: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    background: {
        resizeMode,
        width: '100%',
        height: '100%',
        opacity: 0.8
    },
    screen_title: {
        fontSize: 20,
        fontFamily: 'Chewy-Regular',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 30,
        left: 10
    },
    screen_name: {
        fontSize: 16,
        backgroundColor: 'transparent',
        fontFamily: 'Chewy-Regular',
        position: 'absolute',
        top: 57,
        left: 10
    }
};

export default Information;