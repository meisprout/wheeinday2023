import styles from '@component/styles/Komca.module.css'

export default function Komca({props}) {
    
    return (
        <div className={styles.container}>
        <h3>{props.song}</h3>
        <p>{props.artist}</p>
        <p>{props.credit}</p>
        </div>
    )
  }