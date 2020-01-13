import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Coin from '../components/Coin';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Coin />
      </View>
    );
  }
}

export default HomeScreen;
