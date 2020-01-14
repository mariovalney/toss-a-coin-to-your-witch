import React, { Component } from 'react';
import { Dimensions, Image, View } from 'react-native';

const styles = {
  witch: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  }
};

const Screen = { height } = Dimensions.get('window');

class Witch extends Component {
  static HEIGHT_PORTION = 3

  constructor(props) {
    super(props);

    const sourceHappy = require('../images/happy.png');
    const sourceWaiting = require('../images/waiting.png');

    this.image = this.props.happy ? sourceHappy : sourceWaiting;
  }

  render() {
    return (
      <View style={ [{ 'height': Screen.height / Witch.HEIGHT_PORTION }, styles.witch] }>
        <Image source={ this.image } style={ styles.image } />
      </View>
    );
  }
}

export default Witch;
