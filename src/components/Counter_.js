import React from 'react';

// Import css



class Counter_ extends React.Component {
  render(){
    return (
      <div >
        Generations: {this.props.generations}
      </div>
    );
  }
}

Counter_.propTypes = { generations: React.PropTypes.number };

export default Counter_;
