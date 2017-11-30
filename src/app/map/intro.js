import React, { Component } from 'react';

import { View, Image, TouchableOpacity, Text } from 'react-native';

export default class Intro extends Component {
  render() {
    const {
      WayPointIntro,
      WayPointIntroTop,
      WayPointIntroTopContent,
      imageWayPointIntroTopContent,
      textWayPointTopContent,
      WayPointIntroCenter,
      WayPointIntroCenterContent,
      textWayPointIntroCenter,
      WayPointIntroBottom,
      cancelWayPointIntro,
      cancelWayPointIntroContent,
      goWayPointIntro,
      goWayPointIntroContent,
      textCancel,
      textGo
    } = styles;
    return (
      <View style={WayPointIntro}>
        <View style={WayPointIntroTop}>
          <View style={WayPointIntroTopContent}>
            <Image
              style={imageWayPointIntroTopContent}
              source={require('../../assets/images/LocationIcon.png')}
            />
            <Text style={textWayPointTopContent}>Test function</Text>
          </View>
        </View>
        <View style={WayPointIntroCenter}>
          <View style={WayPointIntroCenterContent}>
            <Text style={textWayPointIntroCenter}>
              Everyone in team test each function
            </Text>
          </View>
        </View>
        <View style={WayPointIntroBottom}>
          <View style={cancelWayPointIntro}>
            <TouchableOpacity>
              <View style={cancelWayPointIntroContent}>
                <Text style={textCancel}>&times;</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={goWayPointIntro}>
            <TouchableOpacity>
              <View style={goWayPointIntroContent}>
                <Text style={textGo}>Go</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  WayPointIntro: {
    position: 'absolute',
    zIndex: 3,
    top: '35%',
    left: '3%',
    right: '3%',
    backgroundColor: '#b9d3c2',
    height: '30%',
    minHeight: '30%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#0002',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  WayPointIntroTop: {
    backgroundColor: '#ebe3cd'
  },
  WayPointIntroTopContent: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageWayPointIntroTopContent: {
    width: 25,
    height: 25
  },
  textWayPointTopContent: {
    fontSize: 20,
    fontFamily: 'Chewy-Regular'
  },
  WayPointIntroCenter: {},
  WayPointIntroCenterContent: {
    padding: 10
  },
  textWayPointIntroCenter: {},
  WayPointIntroBottom: {
    flex: 1
  },
  cancelWayPointIntro: {
    position: 'absolute',
    bottom: 7,
    left: 5
  },
  goWayPointIntro: {
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  cancelWayPointIntroContent: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ebe3cd',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0002',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  goWayPointIntroContent: {
    padding: 7,
    backgroundColor: '#ebe3cd',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0002',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  textCancel: {
    fontSize: 15
  },
  textGo: {
    fontSize: 15
  }
};
