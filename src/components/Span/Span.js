import React from 'react';
import styles from './Span.module.css';

const Span = (props) => {
  const { text } = props;
  return (
    <span
      className={styles.basic}
    > { text }
    </span>
  );
};

export default Span;
