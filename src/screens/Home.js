import React, { Component } from 'react';
import { Dimensions, ImageBackground } from 'react-native';

import Coin from '../components/Coin';
import Witch from '../components/Witch';

const Screen = { height, width } = Dimensions.get('window');

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      witch: 'waiting'
    };
  }

  onMove = (x, y) => {
    const witchHeight = Screen.height / Witch.HEIGHT_PORTION;

    if (x > (Screen.height - witchHeight)) {
      this.setState({witch: 'happy'});
      return;
    }

    this.setState({witch: 'waiting'});
  }

  render() {
    return (
      <ImageBackground style={{ height: '100%', width: '100%' }} source={ require('../images/background.jpg') }>
        <Coin onMove={ this.onMove }/>
        { this.state.witch === 'happy' && <Witch happy /> }
        { this.state.witch === 'waiting' && <Witch /> }
      </ImageBackground>
    );
  }
}

export default HomeScreen;
