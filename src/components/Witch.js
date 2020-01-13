import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';

const styles = {
  witch: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Screen = { height } = Dimensions.get('window');

class Witch extends Component {
  static HEIGHT_PORTION = 5

  constructor(props) {
    super(props);

    this.happyStyle = {
      display: this.props.happy ? 'flex' : 'none'
    }

    this.waitingStyle = {
      display: ! this.props.happy ? 'flex' : 'none'
    }
  }

  render() {
    return (
      <View style={ [{ 'height': Screen.height / Witch.HEIGHT_PORTION }, styles.witch] }>
        <Text style={ this.waitingStyle }>Waiting</Text>
        <Text style={ this.happyStyle }>Happy</Text>
      </View>
    );
  }
}

export default Witch;
