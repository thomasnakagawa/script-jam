import React from 'react';
import Pizzicato from 'pizzicato';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundLoaded: false,
      isPressed: false,
      pitch: 1.0
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyRelease = this.handleKeyRelease.bind(this);
    //this.handlePitchChange = this.handlePitchChange(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyRelease);

    this.sound = new Pizzicato.Sound(this.props.sampleLocation, () => {
      this.setState({ soundLoaded: true });
    });
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyRelease);
  }
  
  handleKeyPress(event) {
    if (event.key === this.props.keyboardKey && !this.state.isPressed) {
      this.setState({ isPressed: true });

      this.props.onPress();
      if (this.state.soundLoaded) {
        this.sound.play(0, this.props.offset || 0.0);
        this.sound.attack = 0;
        this.sound.sourceNode.playbackRate.value = this.state.pitch;
      }
    }
  }

  handleKeyRelease(event) {
    if (event.key === this.props.keyboardKey) {
      this.setState({ isPressed: false });

      this.props.onRelease();
      if (this.state.soundLoaded) {
        this.sound.stop();
      }
    }
  }

  handlePitchChange(event) {
    this.setState({
      pitch: event.target.value,
    });
    if (this.state.soundLoaded && this.sound.sourceNode) {
      console.log(event.target.value);
      this.sound.sourceNode.playbackRate.value = event.target.value;
    }
  }

  render() {
    return (
      <div className={ "DrumPad" + (this.state.isPressed ? " Pressed" : "")}>
        <p>{this.props.keyboardKey}</p>
        <input
          form=""
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={ this.state.pitch }
          onChange={ this.handlePitchChange.bind(this) }>
          </input>
      </div>
    );
  }
}

export default DrumPad;
