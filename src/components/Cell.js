import React from 'react';

// Import css
import styles from './cell.css';

//'dumb' functional component, only receives props. Don't need to dispatch actions nor do they care about the overall state of the app.
const Cell = ({alive, newBorn, handleClick}) => (
      <td
        onClick={handleClick}
        className={`${alive ? 'styles.alive' : ''} ${newBorn ? 'styles.new-born' : ''}`}
        >
      </td>
);


Cell.propTypes = {
  alive: React.PropTypes.bool,
  newBorn: React.PropTypes.bool,
  handleClick: React.PropTypes.func
};


export default Cell;
