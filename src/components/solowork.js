import Link from 'next/link'
import Image from 'next/image';
import styles from '@component/styles/Solowork.module.css'

export default function SoloWork({props}) {
    
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src={props.image} alt={props.title} layout='fill'/>
            </div>
            <div className={styles.txtcontainer}>

                <div className={styles.txtinfo}>
                    <h3>{props.title}</h3>
                    <p>Released on {props.date}</p>
                </div>
                    

                    
                    <p>TRACKS</p>
                    <ul className={styles.tracks}>
                    
                    {
                        props.tracks.map(employee => (
                        
                            <li key={employee.key}>
                                <p>{employee.title}</p>
                                <p>{employee.time}</p>
                            </li>
                        
                        ))
                    }
                    </ul>
                    <div className={styles.buttoncontainer}>

                        <Link href={props.spotify}><button>Listen on Spotify</button></Link>
                        <Link href={props.youtube}><button>Watch the {props.titletrack} MV</button></Link>
                    </div>
            </div>
        </div>
    )
  }