import React from 'react';
import styles from '../../styles/Shared.module.scss';

const Flex = ({ children, row }) => {
  return (
    <div style={row && { flexDirection: 'column' }} className={styles.flex}>
      {children}
    </div>
  );
};

export default Flex;
