import React from 'react';

// Import Components
import Button from './Button';


// Import css
import styles from './control.css';



class Control_ extends React.Component {
  render(){
    return (
        <div className={styles.buttonsGroup} >
          <Button
            handleClick={() => this.props.makeRandomGrid()}
            title={'Random Grid'}
          />
          <Button
            handleClick={() => this.clear()}
            title={'Clean Board'}
          />
          <Button
            handleClick={() => this.togglePlay()}
            title={this.props.playState.isRunning ? 'Pause Time' : 'Run Game' }
          />
          <Button
            handleClick={() => this.props.tick()}
            title={'Next Step'}
          />
        </div>
    );
  }

  togglePlay(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    } else {
      let interval = setInterval(this.props.tick,100);
      this.props.startPlaying(interval);
    }
  }

  clear(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    }
      this.props.clear();
  }
}


Control_.propTypes = {
  makeRandomGrid: React.PropTypes.func,
  tick: React.PropTypes.func,
  startPlaying: React.PropTypes.func,
  stopPlaying: React.PropTypes.func,
  playState: React.PropTypes.any,
  clear: React.PropTypes.func
};

export default Control_;
