import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

export default function Home() {

  const app = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".herotext", { 
        y: 360 
      });
      
    }, app);
    
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Happy Wheein Day 2023 🦋</title>
        <meta name="description" content="An appreciation site dedicate to Jung Wheein for her 28th birthday." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={app} className={styles.main}>
        <section className={styles.hero}>
          <h1 class="herotext">On April 17, 1995, in Jeonju, Jeollabuk-do, South Korea, a <i>butterfly </i>is born.</h1>
          <div className={styles.herogallery}>
            
          </div>
        </section>

        <section className={styles.about}>
          <h2>She is a butterfly who flies swiftly as the wind.</h2>

          <div className={styles.aboutdesc}>
            <h3>JUNG WHEEIN &#40;정휘인&#41;</h3>
            <p>is a South Korean singer under The L1ve. She is best known as a member of South Korean girl group MAMAMOO, where she is focused on vocals and performance.</p>
          </div>
          
        </section>
      </main>
    </>
  )
}
