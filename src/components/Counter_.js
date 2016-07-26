import React from 'react';

// Import css
import styles from './counter.css';



class Counter_ extends React.Component {
  render(){
    return (
      <div className={styles.counter} >
        Generations: {this.props.generations}
      </div>
    );
  }
}

Counter_.propTypes = { generations: React.PropTypes.number };

export default Counter_;
