import React from 'react';

export default class KeyboardDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: {}
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyRelease = this.handleKeyRelease.bind(this);
    this.handleUIClickDown = this.handleUIClickDown.bind(this);
    this.handleUIClickUp = this.handleUIClickUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyRelease);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyRelease);
  }
  
  handleKeyPress(event) {
    // prevent repeats from browser when key is held
    if (!this.state.pressedKeys[event.key]) {
      this.props.onKeyDown(event.key);

      this.setState({
        pressedKeys: { ...this.state.pressedKeys,
          [event.key]: true
        }
      });
    }
  }

  handleKeyRelease(event) {
    this.props.onKeyUp(event.key);
    this.setState({
      pressedKeys: { ...this.state.pressedKeys,
        [event.key]: false
      }
    });
  }

  handleUIClickDown(key) {
    this.props.onKeyDown(key);
  }

  handleUIClickUp(key) {
    this.props.onKeyUp(key);
  }

  render() {
    return (
      <></>
    );
  }
}
