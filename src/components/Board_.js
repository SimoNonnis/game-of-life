import React from 'react';



// Import Components
import Cell from './Cell';


// Import css
import styles from './board.css';








class Board_ extends React.Component {
  render () {
    return (
      <div className={styles.boardContainer}>
        <div>
            <table>
              <tbody>
                {this.props.board.map((row,i) =>
                  <tr key={i}> {row.map((cell,j) =>
                    <Cell
                      key={j}
                      alive={cell.status}
                      newBorn={cell.newBorn}
                      handleClick={() => this.props.toggleAlive(i,j)}
                    />)}
                  </tr> )}
              </tbody>
          </table>
        </div>
      </div>
    )
  }
}


Board_.propTypes = {
  board: React.PropTypes.any,
  toggleAlive: React.PropTypes.func
};

export default Board_;
