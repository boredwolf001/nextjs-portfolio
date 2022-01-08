import styles from '../../styles/Shared.module.scss';

const Button = ({ children, variant, block, type }) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${
        variant === 'primary' ? styles.btnPrimary : styles.btnSecondary
      }`}
      style={block ? { width: '100%' } : {}}
    >
      {children}
    </button>
  );
};

export default Button;
