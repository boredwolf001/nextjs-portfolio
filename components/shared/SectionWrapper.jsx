import React from 'react';
import styles from '../../styles/Shared.module.scss'

interface Props {
  children?: React.ReactNode,
  topMargin: Number,
}

const Button = ({children, topMargin}: Props) => {
  return (
    <div style={{marginTop: topMargin + 'px'}} className={styles.sectionWrapper}>
      {children}
    </div>
  )
};

export default Button