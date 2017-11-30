import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Information from './src/app/layout/infor-bar/information';
import Navigation from './src/app/layout/navi-bar/navigation';
import NextPrevButton from './src/app/layout/navi-bar/btn-next-prev';
import Statistic from './src/app/statistic/statistic';
import LinearGradient from 'react-native-linear-gradient';

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    width: ScreenWidth,
    height: ScreenHeight
  }
};

import Map from './src/app/map/map';

export default class App extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Information />
        <Map />
        <Navigation />
      </View>
    );
  }
}
