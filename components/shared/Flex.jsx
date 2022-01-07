import type { NextPage } from 'next'
import React from 'react';
import styles from '../../styles/Shared.module.scss'

const Flex= ({children, row}: {row?: Boolean, children: React.ReactNode}) => {
  return (
    <div style={row && {flexDirection: 'column'}} className={styles.flex}>
      {children}
    </div>
  )
};

export default Flex