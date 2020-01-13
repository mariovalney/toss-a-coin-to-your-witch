import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View
} from "react-native";

const CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#FFDF00',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#DAA520'
  },
  text: {
    fontSize: 30,
    color: '#DAA520',
    paddingBottom: 4
  }
});

class Coin extends Component {
  _previousTop = 30
  _previousLeft = (Dimensions.get('window').width / 2 ) - CIRCLE_RADIUS

  state = {
    top: this._previousTop,
    left: this._previousLeft,
    pressed: false
  }

  _handleStartShouldSetPanResponder = (event, gestureState) => {
    return true;
  }

  _handleMoveShouldSetPanResponder = (event, gestureState) => {
    return true;
  }

  _handlePanResponderGrant = (event, gestureState) => {
    this.setState({
      pressed: true,
    });
  }

  _handlePanResponderMove = (event, gestureState) => {
    this.setState({
      left: this._previousLeft + gestureState.dx,
      top: this._previousTop + gestureState.dy,
    });
  }

  _handlePanResponderEnd = (event, gestureState) => {
    this.setState({
      pressed: false,
    });

    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
    onPanResponderTerminate: this._handlePanResponderEnd,
  });

  render() {
    const panStyle = {
      translateY: this.state.top,
      translateX: this.state.left,
      backgroundColor: this.state.pressed ? 'blue' : 'green',
    };

    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={[panStyle, styles.circle]}
      >
        <Text style={styles.text}>$</Text>
      </Animated.View>
    );
  }
}

export default Coin;
