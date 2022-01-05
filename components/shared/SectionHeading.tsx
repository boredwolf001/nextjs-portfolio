import styles from '../../styles/Shared.module.scss'

function SectionHeading({heading}: {heading: String}) {
  return (
    <div>
      <h2 className={styles.heading}>{heading}</h2>
    </div>
  )
}

export default SectionHeading
