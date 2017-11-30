import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//Example: https://github.com/anhtuank7c/maps-example

import LocationButton from './locationButton';
import Intro from './intro';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 10.764686,
        longitude: 106.682847,
        latitudeDelta: 0.021,
        longitudeDelta: 0.021
      },
      mapMarkers: [
        {
          latitude: 10.759434,
          longitude: 106.683949,
          latitudeDelta: 0.021,
          longitudeDelta: 0.021
        },
        {
          latitude: 10.764686,
          longitude: 106.682847,
          latitudeDelta: 0.021,
          longitudeDelta: 0.021
        }
      ]
    };
  }

  _renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <View style={styles.wayPoint}>
        <Text>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { container, imageMarker, map, viewListWayPoint } = styles;
    return (
      <View style={container}>
        <LocationButton />
        <View style={viewListWayPoint}>
          <FlatList
            bounces={false}
            data={this.state.mapMarkers}
            keyExtractor={(item, index) => index}
            renderItem={this._renderItem}
          />
        </View>
        <Intro />

        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}
          style={map}
          customMapStyle={mapStyle}
        >
          {this.state.mapMarkers.map((marker, index) => (
            <MapView.Marker key={index} coordinate={marker}>
              <Image
                style={imageMarker}
                source={require('../../assets/images/LocationIcon.png')}
              />
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: screenHeight - 190,
    zIndex: -1
  },
  map: {
    flex: 1,
    zIndex: -1
  },
  imageMarker: {
    width: 60,
    height: 60
  },
  viewListWayPoint: {
    position: 'absolute',
    right: 10,
    top: 80,
    zIndex: 2,
    maxHeight: screenHeight - 290
  },
  wayPoint: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#a5b076',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 7
  }
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d'
      }
    ]
  }
];
