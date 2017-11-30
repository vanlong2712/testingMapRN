import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class LocationButton extends Component {
  render() {
    const { ViewLocation, myLocationButton, myLocationImage } = styles;
    return (
      <View style={ViewLocation}>
        <TouchableOpacity>
          <View style={myLocationButton}>
            <Image
              style={myLocationImage}
              source={require('../../assets/images/my_location.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  ViewLocation: {
    position: 'absolute',
    right: 10,
    top: 20,
    zIndex: 3
  },
  myLocationButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  myLocationImage: {
    width: 35,
    height: 35
  }
};
