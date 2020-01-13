import React, { Component } from 'react';
import { Animated, Dimensions, PanResponder, Text, View } from 'react-native';


const CIRCLE_RADIUS = 30;
const CIRCLE_DIAMETER = 2 * CIRCLE_RADIUS;

const styles = {
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
    borderColor: '#DAA520',
    zIndex: 9
  },
  text: {
    fontSize: 30,
    color: '#DAA520',
    paddingBottom: 4
  }
};

const Screen = { height, width } = Dimensions.get('window');

class Coin extends Component {
  previousX = 30
  previousY = (Screen.width / 2 ) - CIRCLE_RADIUS

  constructor(props) {
    super(props);

    this.state = {
      top: this.previousX,
      left: this.previousY
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: this.startToDrag,
      onPanResponderMove: this.onMove,
      onPanResponderRelease: this.endToDrag,
      onPanResponderTerminate: this.endToDrag,
    });
  }

  onMove = (event, gestureState) => {
    let top = this.previousX + gestureState.dy;
    let left = this.previousY + gestureState.dx;

    // Check for edges
    if (top < 0) {
      top = 0;
    }

    if (top > height - CIRCLE_DIAMETER) {
      top = height - CIRCLE_DIAMETER;
    }

    if (left < 0) {
      left = 0;
    }

    if (left > width - CIRCLE_DIAMETER) {
      left = width - CIRCLE_DIAMETER;
    }

    // Update position
    this.setState({top: top, left: left});

    if (this.props.onMove) {
      this.props.onMove(top, left);
    }
  }

  endToDrag = (event, gestureState) => {
    this.previousX += gestureState.dy;
    this.previousY += gestureState.dx;
  }

  render() {
    const panStyle = {
      translateY: this.state.top,
      translateX: this.state.left
    };

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle]}
      >
        <Text style={styles.text}>$</Text>
      </Animated.View>
    );
  }
}

export default Coin;
