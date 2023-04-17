import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react'
import SoloWork from '@component/components/solowork'
import Komca from '@component/components/komca'
import Award from '@component/components/award'
import Link from 'next/link'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const app = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const headingItems = gsap.utils.toArray(".heading .line");

      headingItems.forEach((item, i)=>{
        gsap.to(item, {
          y: "0%" ,
          opacity:"1",
          duration:1.25,
          delay:(i*2)/50,
          ease:"SlowMo.easeInOut",
          scrollTrigger:{
            trigger: item,
        }
        });
      });

      const paragraphItems = gsap.utils.toArray(".description");

      paragraphItems.forEach((item, i)=>{
        gsap.from(item, {
          opacity:0,
          duration:1.25,
          delay:i/200,
          ease:"SlowMo.easeInOut",
          scrollTrigger:{
            trigger:item,
          }
        });
      });

      gsap.from("#easy", { 
        rotate:"0deg",
        x:375,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger:"#aboutimgset",
          start: "center bottom",
          end: "bottom center",
          scrub: 1
        }
      });

      gsap.from("#goodbye", { 
        top:"0px",
        rotate:"0deg",
        x:125,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger:"#aboutimgset",
          start: "center bottom",
          end: "bottom center",
          scrub: 1
        }
      });

      gsap.from("#watercolor", {
        rotate:"0deg", 
        x:-125,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger:"#aboutimgset",
          start: "center bottom",
          end: "bottom center",
          scrub: 1
        }
      });

      gsap.from("#makemehappy", { 
        top:"0px",
        rotate:"0deg",
        x:-375,
        ease:"SlowMo.easeInOut",
        scrollTrigger:{
          trigger:"#aboutimgset",
          start: "center bottom",
          end: "bottom center",
          scrub: 1
        }
      });
      
      gsap.to("#discography", { 
        backgroundColor:"#292B31",
        color:"#F0F2F6",
        scrollTrigger:{
          trigger:"#discography-desc h2",
          start: "top",
          end: "bottom",
          scrub: true
        }
      });

      const vocalItems = gsap.utils.toArray(".vocalitem");

      vocalItems.forEach((item, i)=>{
        gsap.set(item,{
          yPercent:-10,
        });
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            scrub:0.75
          },
          opacity:0.5,
          duration:0.5,
          delay:i/20,
          yPercent:5,
          ease: "SlowMo.easeInOut"
        });
      });

      const danceItems = gsap.utils.toArray(".danceitem");

      danceItems.forEach((item, i)=>{
        gsap.set(item,{
          opacity:1,
        });
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            scrub:0.75
          },
          
          duration:0.5,
          delay:i/20,
          opacity:0,
          ease: "SlowMo.easeInOut"
        });
      });

      gsap.from("#komcacontainer div", { 
        opacity:0,
        yPercent:5,
        stagger:0.25,
        scrollTrigger:{
          trigger:"#komcacontainer"
        }
      });

      gsap.set("#morewheeinheading",{
        backgroundImage:"radial-gradient(50% 50% at 50% 50%, #292B31 0%, #292B31 100%)",
        color:"#F0F2F6",
      });
      gsap.to("#morewheeinheading", {
        scrollTrigger: {
          trigger: "#morewheeinheading",
          start: "5%",
          end: "center",
          scrub: 0.25
        },
        backgroundImage:"radial-gradient(50% 50% at 50% 50%, #AAB9E1 0%, #F0F2F6 100%)",
        color:"#292B31",
      });

      gsap.set("#morewheein",{
          backgroundColor:"#292B31",
          color:"#F0F2F6"
        });
        gsap.to("#morewheein", {
          scrollTrigger: {
            trigger: "#morewheeinheading",
            start: "5%",
            end: "center",
            scrub: 0.25
          },
          backgroundColor:"#F0F2F6",
          color:"#292B31",
        });

        gsap.set(".soar",{
          yPercent:0
        });
        gsap.from(".soar", {
          scrollTrigger: {
            trigger: ".soar",
            scrub:1
          },
          
          duration:0.5,
          yPercent:5,
          ease: "SlowMo.easeInOut"
        });

        gsap.set(".easy",{
          yPercent:5
        });
        gsap.from(".easy", {
          scrollTrigger: {
            trigger: ".easy",
            scrub:1
          },
          
          duration:0.5,
          yPercent:0,
          ease: "SlowMo.easeInOut"
        });

        const otherartItems = gsap.utils.toArray(".otherartitem");

        otherartItems.forEach((item, i)=>{
        gsap.set(item,{
          yPercent:-10,
        });
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            scrub:1
          },
          duration:0.5,
          delay:i/20,
          yPercent:5,
          ease: "SlowMo.easeInOut"
        });
      });
        

    }, app);
    
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Head>
        <title>Happy Wheein Day 🦋</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main id="main" ref={app} className={styles.main}>
        <div className={styles.responsivenotif}>
          <span>Mobile version in progress! Please use a tablet &#40;landscape&#41; or desktop for best experience!</span>
        </div>
        <article id="hero" className={styles.hero}>
          <h1 id="herotext" class="heading" className={styles.herotext}>
            <div>
              <span class="line">On April 17, 1995, in Jeonju,</span>
            </div>
            <div>
            <span class="line">Jeollabuk-do, South Korea,</span>
            </div>
            <div>
              <span class="line">a <i>butterfly </i>is born.</span>
            </div>
          </h1>
          <div className={styles.herogallery}>
          </div>
        </article>

        <article id="about" className={styles.about}>
          <h2 class="heading">
            <div>
                <span class="line">She is a butterfly who flies swiftly as the wind.</span>
            </div>
          </h2>
          
          <section id="aboutimgset" className={styles.aboutimgset}>
            <div id="easy" className={styles.imgcontainer} style={{rotate:"-5deg"}}>
              <Image src="/images/solopics/easy.png" layout="fill"/>
            </div>
            <div id="goodbye" className={styles.imgcontainer} style={{rotate:"5deg", position:"relative", top:"50px"}}>
              <Image src="/images/solopics/goodbye.png" layout="fill" />
            </div>
            <div id="watercolor" className={styles.imgcontainer} style={{rotate:"-5deg"}}>
              <Image src="/images/solopics/watercolor.png" layout="fill"/>
            </div>
            <div id="makemehappy" className={styles.imgcontainer} style={{rotate:"5deg", position:"relative", top:"50px"}}>
              <Image src="/images/solopics/makemehappy.png" layout="fill"/>
            </div>
          </section>
          
          <section className={styles.aboutdesc}>
            <h3 class="heading">
              <div>
                  <span class="line">JUNG WHEEIN &#40;정휘인&#41;</span>
              </div>
            </h3>
            <p class="description">is a South Korean singer under The L1ve. She is best known as a member of South Korean girl group MAMAMOO, where she is focused on vocals and performance.</p>
          </section>
        </article>

          <article id="discography" className={styles.discography}>
            <section id="discography-desc" >
              <h2 class="heading">
                <div>
                    <span class="line">Wheein is well-known and appreciated by her </span>
                </div>
                <div>
                    <span class="line">honey vocals. From calm, relaxing love songs, to </span>
                </div>
                <div>
                    <span class="line">touching, powerful ballads.</span>
                </div>
              </h2>

              <p class="description">She is also considered the backbone of MAMAMOO, as she provides support during their vocal performances. As a background vocal doing adlibs or the center of attention, Wheein is able to bring a unique flavor into every song.</p>
            </section>
            
            <section id="solowork" className={styles.solowork}>
            <h2 class="heading">
              <div>
                <span class="line">SOLO WORK</span>
              </div>
            </h2>
            <div id="sololist" className={styles.sololist}>

              <div class="soloitem" style={{top:"40px"}}>
                <SoloWork  props={
                  {
                    title:"Magnolia",
                    image:'/images/soloalbums/magnolia.webp',
                    date:"April 17, 2018",
                    tracks:[
                      {
                          "title":"Easy (feat. Sik-K)",
                          "time":"3:08"
                      }
                    ],
                    titletrack:"Easy",
                    spotify:"https://open.spotify.com/track/35Bon0pO4syTi6Hfsr2Kk8?si=d1fd6f4d4694442d",
                    youtube:"https://youtu.be/U_tQ-GIC0O8",
                  }
                }/>
              </div>
              <div class="soloitem" style={{top:"45px"}}>
              <SoloWork props={
                {
                  title:"Soar",
                  image:'/images/soloalbums/soar.webp',
                  date:"April 17, 2018",
                  tracks:[
                    {
                        "title":"Goodbye",
                        "time":"4:12"
                    }
                    ],
                  titletrack:"Goodbye",
                  spotify:"https://open.spotify.com/track/35Bon0pO4syTi6Hfsr2Kk8?si=d1fd6f4d4694442d",
                  youtube:"https://youtu.be/U_tQ-GIC0O8",
                }
              }/>
              </div>
              <div class="soloitem" style={{top:"50px"}}>
              <SoloWork props={
                {
                  title:"Redd",
                  image:'/images/soloalbums/redd.webp',
                  date:"April 17, 2018",
                  tracks:[
                    {
                        "title":"water color",
                        "time":"3:09"
                    },
                    {
                        "title":"TRASH (Feat. pH-1)",
                        "time":"2:52"
                    },
                    {
                        "title":"OHOO",
                        "time":"3:16"
                    },{
                        "title":"Butterfly (Feat. GSoul)",
                        "time":"3:28"
                    },
                    {
                        "title":"Springtime",
                        "time":"2:40"
                    },
                    {
                        "title":"NO THANKS",
                        "time":"3:52"
                    }
                    ],
                  titletrack:"Watercolor",
                  spotify:"https://open.spotify.com/track/35Bon0pO4syTi6Hfsr2Kk8?si=d1fd6f4d4694442d",
                  youtube:"https://youtu.be/U_tQ-GIC0O8",
                }
              }/>
              </div>
              <div class="soloitem" style={{top:"55px"}}>
              <SoloWork props={
                {
                  title:"WHEE",
                  image:'/images/soloalbums/whee.webp',
                  date:"April 17, 2018",
                  tracks:[
                    {
                        "title":"Make Me Happy",
                        "time":"3:17"
                    },
                    {
                        "title":"Pink Cloud",
                        "time":"3:01"
                    },
                    {
                        "title":"Letter Filled With Light",
                        "time":"3:08"
                    },{
                        "title":"Deserve (Interlude)",
                        "time":"0:32"
                    },
                    {
                        "title":"Pastel",
                        "time":"2:22"
                    },
                    {
                        "title":"Paraglide",
                        "time":"3:38"
                    }
                    ],
                  titletrack:"Make Me Happy",
                  spotify:"https://open.spotify.com/track/35Bon0pO4syTi6Hfsr2Kk8?si=d1fd6f4d4694442d",
                  youtube:"https://youtu.be/U_tQ-GIC0O8",
                }
              }/>
              </div>
              
             
              
            </div>
            </section>

            <section id="vocals" className={styles.vocals}>
              <h2 class="heading">
                <div>
                  <span class="line">Vocal Showcase</span>
                </div>
              </h2>
              <p class="description">Listen with headphones/earphones for best experience!</p>
              
                <div className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/ydsuc1vOavw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/6l4divMKp4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/2wcAbpYfj5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/AzPgpPe1RHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div  className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/VzpxvsrupkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div  className={styles.vocalyoutube}>
                  <iframe class="vocalitem" width="100%" height="100%" src="https://www.youtube.com/embed/bOnMQ9OmfAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              
            </section>

            <section id="dance" className={styles.dance}>
              <h2 class="heading">
                <div>
                    <span class="line">Aside from vocals, Wheein is also </span>
                </div>
                <div>
                    <span class="line">great in dancing and performing!</span>
                </div>
              </h2>

              <p class="description">
              As part of the performance line, Wheein is shown to be very skillful in dancing. She is able to do cool moves for hip-hop songs, to alluring moves for mature concepts.
              </p>
              
              <div className={styles.dancecontainer}>
              <div className={styles.danceyoutube}>
                <iframe class="danceitem" width="100%" height="100%" src="https://www.youtube.com/embed/cnnaBrj_Ses" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={styles.danceyoutube}>
              <iframe class="danceitem" width="100%" height="100%" src="https://www.youtube.com/embed/hu7idVhlnq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={styles.danceyoutube}>
              <iframe class="danceitem" width="100%" height="100%" src="https://www.youtube.com/embed/I7TMLCnNQqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={styles.danceyoutube}>
              <iframe class="danceitem" width="100%" height="100%" src="https://www.youtube.com/embed/VevlSFx8jsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className={styles.danceyoutube}>
              <iframe class="danceitem"  width="100%" height="100%" src="https://www.youtube.com/embed/-RxAP9H5fas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              </div>
              
            </section>

            <section id="komca" className={styles.komca}>
              <h2 class="heading">
                <div>
                    <span class="line">9 KOMCA Credits</span>
                </div>
              </h2>

              <p class="description">
              MAMAMOO members are well-known for being self-made artists, and Wheein is no exception!              </p>
              
              <div id="komcacontainer" className={styles.komcacontainer}>
              <Komca  props={
                  {
                    song:"My Hometown (고향이)",
                    artist:"MAMAMOO",
                    credit:"Writer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Moderato",
                    artist:"MAMAMOO",
                    credit:"Writer and Composer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Holy-Day",
                    artist:"Jung Min Hyuk",
                    credit:"Writer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"25",
                    artist:"MAMAMOO",
                    credit:"Writer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Miss U",
                    artist:"Jvde Milez",
                    credit:"Writer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Trash",
                    artist:"Wheein",
                    credit:"Composer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Ohoo",
                    artist:"Wheein",
                    credit:"Writer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Springtime",
                    artist:"Wheein",
                    credit:"Writer and Composer"
                  }
                }/>
                <Komca  props={
                  {
                    song:"Letter Filled With Light",
                    artist:"Wheein",
                    credit:"Writer"
                  }
                }/>
              </div>
              
            </section>

            <section id="awards" className={styles.awards}>
          <h2 class="heading">
                <div>
                    <span class="line">Her hardwork always pay off!</span>
                </div>
              </h2>

              <p class="description">
              MAMAMOO members are well-known for being self-made artists, and Wheein is no exception!              </p>
              
              <div id="awardscontainer" className={styles.awardscontainer}>
              <Award  props={
                  {
                    event:"Inkigayo (2017)",
                    award:"Music show win (Anymore w/ Jungkey)",
                    status:"Winner"
                  }
                }/>
                <Award  props={
                  {
                    event:"Gaon Chart Music Awards (2019)",
                    award:"Artist of the Year – Digital Music (Good Bye)",
                    status:"Nominee"
                  }
                }/>
                <Award  props={
                  {
                    event:"APAN Star Awards (2020)",
                    award:"Best OST Award (With My Tears)",
                    status:"Nominee"
                  }
                }/>
                <Award  props={
                  {
                    event:"Seoul Music Awards (2020)",
                    award:"OST Award (With My Tears)",
                    status:"Nominee"
                  }
                }/>
                <Award  props={
                  {
                    event:"TOP TEN Awards (2022)",
                    award:"Best Artist of K-Drama OST",
                    status:"Winner"
                  }
                }/>
                <Award  props={
                  {
                    event:"MCountdown (2022)",
                    award:"Music show win (Make Me Happy)",
                    status:"Winner"
                  }
                }/>
              </div>
              
          </section>
          </article>
          
          <article id="morewheein" className={styles.morewheein}>
          <section id="morewheeinheading" className={styles.morewheeinheading}>
          <h2 class="heading">
              <div>
                  <span class="line">Aside from being a honey-voiced </span>
              </div>
              <div>
                  <span class="line">singer and a skillful dancer, </span>
              </div>
              <div>
                  <span class="line">Wheein is also...</span>
              </div>
            </h2>
          </section>
            

            <section id="art" className={styles.art}>
            <h3 class="heading">
              <div>
                  <span class="line">A Creative Visual Artist</span>
              </div>
            </h3>

            <div className={styles.artcontainer}>
            <div className={styles.artmain}>
            <div className={styles.artredd}>
                <Image src="/images/art/redd.png" alt="wheein redd" layout='fill'/>
              </div>

              <div className={styles.artdescription}>
                <p class="description">Incorporating paintings in her music releases</p>
              </div>

              <div className={styles.easysoar}>
                <div className={styles.imgcontainer}>
                  <Image class="soar" src="/images/art/soar.png" alt="wheein soar" layout='fill'/>
                </div>
                <div className={styles.imgcontainer}>
                  <Image class="easy" src="/images/art/easy.png" alt="wheein soar" layout='fill'/>
                </div>
              </div>
            </div>
              

              <div className={styles.otherart}>
                <figure class="otherartitem">
                  <div className={styles.imgcontainer}>
                    <Image  src="/images/art/magnolia.png" alt="wheein soar" layout='fill'/>
                  </div>     
                  <figcaption>her magnolia tattoo</figcaption>
                </figure>

                <figure class="otherartitem">
                  <div className={styles.imgcontainer}>
                    <Image  src="/images/art/twit.png" alt="wheein soar" layout='fill'/>
                  </div>     
                  <figcaption>featured in hwasa&#39;s twit photobook</figcaption>
                </figure>

                <figure class="otherartitem">
                  <div className={styles.imgcontainer}>
                    <Image  src="/images/art/scribble.png" alt="wheein soar" layout='fill'/>
                  </div>     
                  <figcaption>tattoo ideas anyone?</figcaption>
                </figure>

                <figure class="otherartitem">
                  <div className={styles.imgcontainer}>
                    <Image  src="/images/art/hwasa.png" alt="wheein soar" layout='fill'/>
                  </div>     
                  <figcaption>she looks like hwasa</figcaption>
                </figure>

              </div>
            </div>

            
            </section>

          </article>
          
          <section className={styles.end}>
              <h2>YOU&#39;VE REACHED THE END OF THE SITE!</h2>
              <h2>The site is still work in progress. To further improve the site until completion, you may share feedback or suggestions to <Link href="https://twitter.com/loafsprout">@loafsprout!</Link></h2>
            </section>
      </main>
    </>
  )
}
