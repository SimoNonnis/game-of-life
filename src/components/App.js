import React from 'react';
import { connect } from 'react-redux';
import Control_ from './Control_';
import Counter_ from './Counter_';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';


// Import Components
import Board_ from './Board_';

// Import css
import styles from './app.css';



const mapStateToProps_1 = ({ board }) => {
  return { board } ;
}

const mapDispatchToProps_1 = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const Board = connect(mapStateToProps_1, mapDispatchToProps_1)(Board_);

const mapStateToProps_2 = ({playState}) => {
  return { playState };
}

const mapDispatchToProps_2 = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const Control = connect(mapStateToProps_2,mapDispatchToProps_2)(Control_);


const mapStateToProps_3 = ({counter}) => {
  return { generations: counter }
};

const Counter = connect(mapStateToProps_3)(Counter_);



const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Game of Life</h1>

    <div>
      <p>The Game of Life, also known simply as Life, is a cellular automaton invented by the British mathematician John Horton Conway in 1970.</p>

      <p>Every cell interacts with its 8 neighbours.
      At each step in time, the following transitions occur:</p>

      <ul>
        <li>Each cell with less than 2 neighbors dies, for underpopulation</li>
        <li>Each cell with more than 3 neighbors dies, as for overpopulation</li>
        <li>Each cell with two or three neighbors survives</li>
        <li>Each dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </ul>

      <p>Many different types of patterns occur in the Game of Life, including still lifes, oscillators, and patterns that translate themselves across the board ("spaceships").</p>
    </div>

    <Board />
    <div className={styles.bottomContainer}>
      <Control />
      <Counter />
    </div>
  </div>
);

export default App;
