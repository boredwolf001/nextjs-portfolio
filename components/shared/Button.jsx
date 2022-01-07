import React from 'react';
import styles from '../../styles/Shared.module.scss'

interface Props {
  children?: React.ReactNode,
  variant?: String,
}

const Button = ({children, variant}: Props) => {
  return (
    <button className={`${styles.button} ${variant === 'primary' ? styles.btnPrimary : styles.btnSecondary}`}>
      {children}
    </button>
  )
};

export default Button
