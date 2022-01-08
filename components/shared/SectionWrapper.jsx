import styles from '../../styles/Shared.module.scss';

const Button = ({ children, topMargin }) => {
  return (
    <div
      style={{ marginTop: topMargin + 'px' }}
      className={styles.sectionWrapper}
    >
      {children}
    </div>
  );
};

export default Button;
