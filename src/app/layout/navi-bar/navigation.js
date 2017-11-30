import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import NaviButton from './navi-button';
import NextPrevButton from './btn-next-prev';
import LinearGradient from 'react-native-linear-gradient';

const Navigation = ({ prop }) => {
    const { footer, container, view_style, background } = styles;

    return (
        <View style={footer} >
            <View style={container}>
                <View style={view_style}>
                    <Image
                        style={background}
                        source={require('../../../assets/images/infor_background.png')}
                    />
                </View>
                <NextPrevButton />
                <NaviButton>
                </NaviButton>
            </View>
            {/* <LinearGradient colors={['#56CCF2', '#2F80ED']} style={container} >
                <NextPrevButton />
                <NaviButton>
                </NaviButton>
            </LinearGradient> */}
        </View>
    );
};

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const resizeMode = 'center';
const styles = {
    footer: {
        position: 'absolute',
        left: 0,
        top: ScreenHeight - 100,
        backgroundColor: 'transparent'
    },
    container: {
        width: ScreenWidth,
        height: 100,
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
        opacity: 0.7
    }
}

export default Navigation;