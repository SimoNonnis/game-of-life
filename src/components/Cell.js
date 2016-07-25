import React from 'react';
import classNames from 'classnames/bind';

// Import css
import styles from './cell.css';


let cx = classNames.bind(styles);
//'dumb' functional component, only receives props. Don't need to dispatch actions nor to they care about the overall state of the app.
const Cell = ({alive, newBorn, handleClick}) => {
  let cellClasses = cx({
    alive: alive,
    newBorn: newBorn
  });

  return (
    <td
      onClick={handleClick}
      className={cellClasses}
    >
    </td>
  );
};




Cell.propTypes = {
  alive: React.PropTypes.any,
  newBorn: React.PropTypes.any,
  handleClick: React.PropTypes.func
};


export default Cell;
