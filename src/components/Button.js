import React from 'react';

// Import css
import styles from './button.css';

//'dumb' functional component, only receives props. Don't need to dispatch actions nor to they care about the overall state of the app.
const Button = ({title, handleClick}) => (
  <span onClick={handleClick} className={styles.button} >
    {title}
  </span>
);

Button.propTypes = {
  title: React.PropTypes.string,
  handleClick: React.PropTypes.func
};

export default Button;
