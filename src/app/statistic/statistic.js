import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import LinearGradient from 'react-native-linear-gradient';

const Statistic = ({ prop }) => {
    const { view_container, view_style, background, percent_text, container } = styles;
    return (
        <View style={view_container}>
            <View style={view_style}>
                <Image
                    style={background}
                    source={require('../../assets/images/bg_resize.png')}
                />
                <View style={container}>
                    <PercentageCircle
                        radius={100}
                        percent={75}
                        color={"#ff8c1a"}
                        bgcolor={"#b3ecff"}
                        borderWidth={3.5}
                        innerColor={"#ccffff"} >
                        <Text style={percent_text}>75pts</Text>
                    </PercentageCircle>
                </View>
            </View>

            {/* <View>
                <Text style={screen_title} >This is the title of the information</Text>
                <Text style={screen_name} >This is the name of the information </Text>
            </View> */}
        </View>

    );
};

const ScreenWidth = Dimensions.get("window").width;
const resizeMode = 'cover';

const styles = {
    view_container: {
        width: '100%',
        height: '100%'
    },
    view_style: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },
    background: {
        resizeMode,
        flex: 1,
        width: null,
        height: null,
        opacity: 0.8,
    },
    container: {
        position: 'absolute',
        top: 40,
        left: ScreenWidth / 2 - 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    percent_text: {
        fontSize: 25,
        paddingTop: 10,
        fontFamily: 'Chewy-Regular',
    }
};

export default Statistic;