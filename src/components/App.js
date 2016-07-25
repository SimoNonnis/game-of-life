import React from 'react';
import styles from './app.css';


const App = () => (
  <div>
    <h1 className={styles.title}>Game of Life</h1>

    <p>The <strong>Game of Life</strong>, also known simply as <strong>Life</strong>, is a cellular automaton invented by the British mathematician John Horton Conway in 1970.</p>

    <p>The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties</p>

    <h2>Rules</h2>

    <p>The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead.</p>

    <p>Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>

    <ul>
      <li>Each cell with less than 2 neighbors dies, for underpopulation</li>
      <li>Each cell with more than 3 neighbors dies, as for overpopulation</li>
      <li>Each cell with two or three neighbors survives</li>
      <li>Each dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
    </ul>
  </div>
);

export default App;
