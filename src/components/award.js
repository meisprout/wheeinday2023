import styles from '@component/styles/Award.module.css'

export default function Award({props}) {
    
    return (
        <div className={styles.container}>
        <h3>{props.event}</h3>
        <p>{props.award}</p>
        <p>{props.status}</p>
        </div>
    )
  }