import React, {Component} from 'react';
import {
    View, 
    Image
} from 'react-native';

const NaviButton = ({prop}) => {

    const {btnList, button} = styles;
    return (
        <View style={btnList}>
            <Image 
                source={require('../../../assets/images/information.png')} 
                style={button}
            />
            <Image 
                source={require('../../../assets/images/map.png')} 
                style={button}
            />
            <Image 
                source={require('../../../assets/images/waypoint.jpg')} 
                style={button}
            />
            <Image 
                source={require('../../../assets/images/rank.jpg')} 
                style={button}
            />
        </View>
    );
};

const styles = {
    btnList: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 10,
        margin: 2,
        shadowColor: '#ffff99',        
        shadowRadius: 10,
        shadowOpacity: 1.0
    }
};

export default NaviButton;