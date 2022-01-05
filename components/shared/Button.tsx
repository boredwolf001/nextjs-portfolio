import React from 'react';
import styles from '../../styles/Shared.module.scss'

interface Props {
  children?: React.ReactNode,
  variant?: String,
  type?: String
}

const Button = ({children, variant, type}: Props) => {
  return (
    <button type={type} className={`${styles.button} ${variant === 'primary' ? styles.btnPrimary : styles.btnSecondary}`}>
      {children}
    </button>
  )
};

export default Button